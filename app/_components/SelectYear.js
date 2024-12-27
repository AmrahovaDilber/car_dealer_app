export default function SelectYear({ years, selectedYear, setSelectedYear }) {
  return (
    <div className="mb-6 w-full max-w-sm">
      <label className="block text-white text-xl font-semibold mb-3">
        Select Model Year
      </label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
      >
        <option value="" className="text-gray-400">
          --Select Year--
        </option>
        {years?.map((year) => (
          <option key={year} value={year} className="text-black">
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}