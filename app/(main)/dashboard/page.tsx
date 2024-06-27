import { CreateFormDialog } from "./_components/CreateFormDialog";

type Props = {};

export default function DashboardPage({}: Props) {
  return (
    <div className="p-8">
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <CreateFormDialog />
      </header>
    </div>
  );
}
