import { useFormStore } from "@/app/store/useFormStore";
import { THEMES } from "@/app/themes";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {};

export default function ThemeSelector({}: Props) {
  const setTheme = useFormStore((state) => state.setSelectedTheme);
  const selectedTheme = useFormStore((state) => state.selectedTheme);
  function onThemeSelected(value: string) {
    const theme = THEMES.find((theme) => theme.theme === value);
    if (theme) {
      setTheme(theme);
    }
  }
  return (
    <div>
      <Label>Select Theme:</Label>
      <Select onValueChange={onThemeSelected} value={selectedTheme.theme}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {THEMES.map((theme) => (
            <SelectItem key={theme.theme} value={theme.theme}>
              <div className="flex items-center gap-2">
                <div className="flex ">
                  <span
                    className="h-3 w-3 rounded-l-sm"
                    style={{ background: theme.primary }}
                  />
                  <span
                    className="h-3 w-3"
                    style={{ background: theme.secondary }}
                  />
                  <span
                    className="h-3 w-3 rounded-r-sm"
                    style={{ background: theme.accent }}
                  />
                </div>
                <span>{theme.theme}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
