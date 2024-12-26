"use client";
import { Suspense } from "react";
import { useEffect, useState } from "react";
import { fetchVehicle } from "../_services/api";
import LoadingSpinner from "./LoadingSpinner";


export default function ResultPageClient({ selectedMake, selectedYear }) {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchVehicle();
        const make = data.find((item) => item.MakeName === selectedMake);

        if (!make) {
          throw new Error("Vehicle make not found");
        }
        const modelsResponse = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${make.MakeId}/modelyear/${selectedYear}?format=json`
        );
        const modelsData = await modelsResponse.json();

        if (modelsResponse.ok) {
          setFilteredData(modelsData.Results || []);
        } else {
          throw new Error(
            modelsData.Message || "Failed to fetch vehicle models"
          );
        }
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selectedMake, selectedYear]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-4">
          Vehicle Models for {selectedMake} ({selectedYear})
        </h1>
        <ul className="space-y-2">
          {filteredData.map((model) => (
            <li
              key={model.Model_ID}
              className="p-4 bg-white border border-gray-300 rounded shadow"
            >
              {model.Model_Name}
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
