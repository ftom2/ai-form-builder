import Page from "@/components/Page";
import { CreateFormDialog } from "./_components/CreateFormDialog";

type Props = {};

export default function DashboardPage({}: Props) {
  return (
    <Page>
      <header className="flex items-center justify-between">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <CreateFormDialog />
      </header>
    </Page>
  );
}
