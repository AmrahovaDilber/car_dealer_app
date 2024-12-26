import React from 'react'

export default function SelectYear({years,selectedYear,setSelectedYear}) {
  return (
    <div className="mb-6">
    <label className="block text-gray-700 font-medium mb-2">
      Select Model Year
    </label>
    <select
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
      className="w-64 p-2 border border-gray-300 rounded"
    >
      <option value="">--Select year--</option>
      {years?.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
  )
}
