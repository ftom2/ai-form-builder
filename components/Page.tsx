import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Page({ children }: Props) {
  return <div className="p-8">{children}</div>;
}
