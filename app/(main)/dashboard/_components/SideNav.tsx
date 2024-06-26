"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LibraryBig, LineChart, MessageSquare, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

export default function SideNav({}: Props) {
  const menu = [
    {
      id: 1,
      name: "My Forms",
      icon: LibraryBig,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Responses",
      icon: MessageSquare,
      path: "/dashboard/responses",
    },
    {
      id: 3,
      name: "Analytics",
      icon: LineChart,
      path: "/dashboard/analytics",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: Shield,
      path: "/dashboard/upgrade",
    },
  ];

  const pathName = usePathname();

  return (
    <ul className="h-full shadow-md border-r bg-background p-5 flex flex-col gap-1">
      {menu.map((item) => (
        <li key={item.id}>
          <Link
            href={item.path}
            className={`p-4 hover:bg-primary hover:text-white cursor-pointer flex gap-3 items-center rounded-lg  ${
              pathName === item.path ? "bg-primary text-white" : "text-gray-500"
            }`}
          >
            <item.icon size={24} className="mr-2" />
            {item.name}
          </Link>
        </li>
      ))}
      <li className="fixed bottom-20 w-[13.5rem] flex flex-col">
        <Button className="w-full">+ Create Form</Button>
        <Progress value={50} className="mt-7" />
        <h2 className="text-sm mt-1 text-gray-600">
          <strong>2 </strong>
          Out of <strong>3</strong> File(s) Created
        </h2>
        <h2 className="text-sm mt-3 text-gray-600">
          Upgrade your plan for unlimited form creation
        </h2>
      </li>
    </ul>
  );
}
