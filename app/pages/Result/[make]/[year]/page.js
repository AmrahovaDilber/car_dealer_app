import ResultPageClient from "@/app/_components/ResultPageClient";
import "../../../../_styles/globals.css";
import { fetchVehicle } from "@/app/_services/api";

export default async function Page({ params }) {
  const { make, year } = await params;
  return <ResultPageClient selectedMake={make} selectedYear={year} />;
}

export async function generateStaticParams() {
    const data = await fetchVehicle();
    const vehicleMakes = data || [];
    const currentYear = 2024; 
    const years = Array.from(
      { length: currentYear - 2015 + 1 },
      (_, i) => 2015 + i
    );
  
    return vehicleMakes.flatMap((make) =>
      years.map((year) => ({
        make: make.MakeName,
        year: year.toString(),
      }))
    );
  }
