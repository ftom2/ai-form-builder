import ThemeSelector from "./ThemeSelector";
import BackgroundSelector from "./BackgroundSelector";

export default function StylesController() {
  return (
    <div className="flex flex-col gap-5">
      <ThemeSelector />
      <BackgroundSelector />
    </div>
  );
}
