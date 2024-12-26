"use client";

import React, { useState } from "react";
import "../app/_styles/globals.css";
import Link from "next/link";
import SelectMake from "./_components/SelectMake";
import SelectYear from "./_components/SelectYear";

export default function FilterPage({ initialData = [] }) {
  const [vehicles] = useState(initialData);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  
  const years = Array.from(
    { length: 2024 - 2015 + 1 }, 
    (_, i) => 2015 + i
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-violet-400 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-10">Vehicle Filter</h1>
      <SelectMake
        vehicles={vehicles}
        selectedMake={selectedMake}
        setSelectedMake={setSelectedMake}
      />
      <SelectYear
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        years={years}
      />
      <Link href={`/pages/Result/${selectedMake}/${selectedYear}`}>
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