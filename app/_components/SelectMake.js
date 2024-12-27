export default function SelectMake({ selectedMake, setSelectedMake, vehicles }) {
  return (
    <div className="mb-6 w-full max-w-sm">
      <label className="block text-white text-xl font-semibold mb-3">
        Select Vehicle Make
      </label>
      <select
        value={selectedMake}
        onChange={(e) => setSelectedMake(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-200"
      >
        <option value="" className="text-gray-400">
          --Select Make--
        </option>
        {vehicles?.map((make) => (
          <option
            key={make.MakeId}
            className="text-black"
            value={make.MakeName}
          >
            {make.MakeName}
          </option>
        ))}
      </select>
    </div>
  );
}