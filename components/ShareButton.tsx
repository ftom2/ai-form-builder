import { Share2 } from "lucide-react";
import { RWebShare } from "react-web-share";
import MyTooltip from "./MyTooltip";
import { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  id: number;
  children?: ReactNode;
};

export function ShareButton({ title, text, id, children }: Props) {
  return (
    <RWebShare
      data={{
        text: `${text}\n Build forms with the power of AI`,
        title,
        url: `${window.location.origin}/preview/${id}`,
      }}
      onClick={() => console.log("shared successfully!")}
    >
      {children ?? <Share2 className="h-5 w-5 text-primary cursor-pointer" />}
    </RWebShare>
  );
}
