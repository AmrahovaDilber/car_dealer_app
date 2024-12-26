'use client';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { fetchModel, fetchVehicle } from '../_services/api';
import LoadingSpinner from './LoadingSpinner';
import ModelNames from './ModelNames';

export default function ResultPageClient({ selectedMake, selectedYear }) {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDataVehicle() {
      try {
        setLoading(true);
        const data = await fetchVehicle();
        const make = data.find((item) => item.MakeName === selectedMake);

        if (!make) {
          throw new Error('Vehicle make not found');
        }
        const modelsData = await fetchModel(make.MakeId, selectedYear);
        setFilteredData(modelsData);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchDataVehicle();
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
        <ModelNames filteredData={filteredData}></ModelNames>
      </div>
    </Suspense>
  );
}
