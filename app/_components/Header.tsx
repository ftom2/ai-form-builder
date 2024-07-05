"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const { isSignedIn } = useUser();
  return (
    <header className="p-5 border-b shadow-sm">
      <div className="flex justify-between">
        <Image src="/logo.svg" alt="logo" width={180} height={50} />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Link href="/dashboard">
              <Button color="outline">Dashboard</Button>
            </Link>
            <UserButton />
          </div>
        ) : (
          <SignInButton>
            <Button>Get Started</Button>
          </SignInButton>
        )}
      </div>
    </header>
  );
}
