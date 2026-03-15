import DonationsTable from "../components/DonationsTable";

export default function Donations() {

  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-gray-800">
        Donations
      </h1>

      <DonationsTable />

    </div>
  );
}
