"use client";
import React, { useEffect, useState } from "react";
import "../app/_styles/globals.css";
import Link from "next/link";
import { fetchVehicle } from "./_services/api";
import SelectMake from "./_components/SelectMake";
import SelectYear from "./_components/SelectYear";
import dynamic from "next/dynamic";
 function FilterPage() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = 2024;

  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, i) => 2015 + i
  );

  useEffect(() => {
    async function getData() {
      const data = await fetchVehicle();
      setVehicles(data);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-violet-400 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-10">Vehicle Filter</h1>
      <SelectMake
        vehicles={vehicles}
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
      ></SelectMake>
      <SelectYear
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        years={years}
      ></SelectYear>
      <Link href={`/pages/Result/${selectedMake}/${selectedYear}`} passHref>
        <button
          disabled={!selectedMake || !selectedYear}
          className={`px-6 py-2 font-bold rounded ${
            selectedMake && selectedYear
              ? "bg-blue-500 text-black"
              : "bg-gray-300"
          }`}
        >
          Next
        </button>
      </Link>
    </div>
  );
}
export default dynamic (() => Promise.resolve(FilterPage), {ssr: false})
