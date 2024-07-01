import ThemeSelector from "./ThemeSelector";
import { BackgroundSelector } from "./BackgroundSelector";

type Props = {
  isLoading: boolean;
};
export default function StylesController({ isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="grid place-items-center text-xl h-full">Loading...</div>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      <ThemeSelector />
      <BackgroundSelector />
    </div>
  );
}
