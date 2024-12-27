export default function ModelNames({ filteredData }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredData.map((model,index) => (
        <li
          key={index}
     className="p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
        <h2 className="text-lg font-semibold text-gray-700">{model.Model_Name}</h2>
        </li>
      ))}
    </ul>
  );
}
