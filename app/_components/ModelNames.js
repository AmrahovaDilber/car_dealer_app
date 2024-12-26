import React from 'react'

export default function ModelNames({filteredData}) {
  return (
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
  )
}
