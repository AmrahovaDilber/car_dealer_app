import React from "react";

export default function SelectMake({ selectedMake, setSelectedMake ,vehicles}) {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        Select Vehicle Make
      </label>
      <select
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
        className="w-64 p-2 border border-gray-300 rounded"
      >
        <option value="" className="text-black w-64">
          --Select make--
        </option>
        {vehicles?.map((make) => (
          <option
            key={make.MakeId}
            className="text-black w-full"
            value={make.MakeName}
          >
            {make.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}
