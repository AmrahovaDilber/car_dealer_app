const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (!data) {
      throw new Error('No data received');
    }

    return data;
  } catch (error) {
    console.error('Fetch error:', error.message);
    throw error;
  }
}

export async function fetchVehicle() {
  const data = await fetchData(apiUrl);
  return data.Results;
}

export async function fetchModel(makeId, year) {
  const data = await fetchData(
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
  );
  return data.Results;
}
