import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IFormField, IOnUpdateFieldArg } from "../types";
import { Edit } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PopoverClose } from "@radix-ui/react-popover";

type Props = {
  defaultValue: IFormField;
  onUpdate: (data: IOnUpdateFieldArg) => void;
};

export default function EditPopover({ defaultValue, onUpdate }: Props) {
  const [label, setLabel] = useState(defaultValue.label);
  const [placeholder, setPlaceholder] = useState(defaultValue.placeholder);
  return (
    <Popover>
      <PopoverTrigger>
        <Edit size={16} className="text-gray-600" />
      </PopoverTrigger>
      <PopoverContent className="space-y-3">
        <div className="flex flex-col gap-1">
          <Label>Edit Label</Label>
          <Input
            defaultValue={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label>Edit Placeholder</Label>
          <Input
            defaultValue={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
          />
        </div>
        <PopoverClose>
          <Button onClick={() => onUpdate({ label, placeholder })}>
            Update
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  );
}
