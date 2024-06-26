import { SignedIn } from "@clerk/nextjs";
import SideNav from "./_components/SideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <SignedIn>
        <div className="flex">
          <div className="md:w-64 fixed h-[calc(100vh-81px)] bg-background">
            <SideNav />
          </div>
          <main className="flex-1 md:ml-64 h-[calc(100vh-81px)]">
            {children}
          </main>
        </div>
      </SignedIn>
    </div>
  );
}
