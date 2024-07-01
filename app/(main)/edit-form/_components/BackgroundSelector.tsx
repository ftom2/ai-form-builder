import { useFormStore } from "@/app/store/useFormStore";
import { GRADIENTS } from "@/app/themes";
import { Label } from "@/components/ui/label";

export function BackgroundSelector() {
  const setBG = useFormStore((state) => state.setSelectedBackground);
  return (
    <div>
      <Label>Select Background:</Label>
      <div className="grid grid-cols-3 gap-4">
        {GRADIENTS.map((gradient) => (
          <div
            key={gradient.name}
            className={`w-full h-12 rounded-lg cursor-pointer grid place-items-center p-2 ${gradient.border} transition-all duration-150`}
            style={{
              background: gradient.gradient,
              color: gradient.isDark ? "white" : "black",
            }}
            onClick={() => setBG(gradient.gradient)}
          >
            {gradient.name}
          </div>
        ))}
      </div>
    </div>
  );
}
