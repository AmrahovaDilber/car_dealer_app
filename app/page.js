"use client";
import React, { useEffect, useState } from "react";
import "@/app/_styles/globals.css";
import Link from "next/link";
import { fetchVehicle } from "./_services/api";
import SelectMake from "@/app/_components/SelectMake";
import SelectYear from "@/app/_components/SelectYear";
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
    <div className="min-h-screen  bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 flex flex-col items-center p-6">
     <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
    Vehicle Filter
  </h1>
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
   
  <Link href={`/pages/Result/${selectedMake}/${selectedYear}`}>
    <button
      disabled={!selectedMake || !selectedYear}
      className={`mt-8 px-8 py-3 font-bold text-lg rounded shadow-md transition-transform transform hover:scale-105 ${
        selectedMake && selectedYear
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-400 text-gray-200 cursor-not-allowed"
      }`}
    >
      Next
    </button>
  </Link>
    </div>
  );
}
export default dynamic (() => Promise.resolve(FilterPage), {ssr: false})