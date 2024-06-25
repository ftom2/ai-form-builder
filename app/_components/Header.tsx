import { Button } from "@/components/ui/button";
import Image from "next/image";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="p-5 border-b shadow-sm">
      <div className="flex justify-between">
        <Image src="/logo.svg" alt="logo" width={180} height={50} />
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
