import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = { id: number };

export default function PageActions({ id }: Props) {
  return (
    <div className="flex w-full justify-between">
      <Button
        asChild
        color="ghost"
        size="icon"
        className="hover:bg-transparent mb-5 hover:font-bold"
      >
        <Link href="/dashboard">
          <ArrowLeft size={16} className="shrink-0" />
          Back
        </Link>
      </Button>
      <div className="flex gap-3">
        <Button size="sm" className="flex gap-2 items-center" asChild>
          <Link href={`/preview/${id}`} target="_blank">
            <SquareArrowOutUpRight size={16} className="shrink-0" />
            Live Preview
          </Link>
        </Button>
        <Button
          size="sm"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-500/90"
        >
          <Share2 size={16} className="shrink-0" />
          Share
        </Button>
      </div>
    </div>
  );
}
