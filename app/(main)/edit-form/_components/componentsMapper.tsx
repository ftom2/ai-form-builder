import { Input } from "@/components/ui/input";
import { IFormField, IOption } from "../types";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

const textField = (field: IFormField) => (
  <label className="form-control w-full ">
    <div className="label">
      <span className="label-text">{field.label}</span>
    </div>
    <input
      type="text"
      placeholder={field.placeholder}
      className="input input-bordered w-full input-primary"
    />
  </label>
);
const dropdown = (field: IFormField) => (
  <div>
    <Label htmlFor={field.name}>{field.label}</Label>
    <Select>
      <SelectTrigger id={field.name} className="w-full ">
        <SelectValue placeholder={field.placeholder} />
      </SelectTrigger>
      <SelectContent>
        {field.options?.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);
export const componentsToFormElementsMapper = (
  field: IFormField,
  data?: any
) => {
  const formElements = {
    text: textField(field),
    email: textField(field),
    password: textField(field),
    dropdown: dropdown(field),
    select: dropdown(field),
    checkbox: (
      <div className="flex w-full  items-center gap-1.5">
        <Checkbox id={field.name} />
        <Label htmlFor={field.name}>{field.label}</Label>
      </div>
    ),
    date: (
      <div className="flex flex-col gap-1">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Popover>
          <PopoverTrigger asChild className="w-full">
            <Button
              color={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !data?.date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {data?.date ? format(data.date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={data?.date}
              onSelect={data?.setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    ),
    "radio-group": (
      <div className="flex flex-col gap-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        <RadioGroup defaultValue={field?.options?.[0].value} name={field.name}>
          {(field?.options as IOption[])?.map((option) => (
            <div className="flex items-center space-x-2" key={option.label}>
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    ),
    "checkbox-group": (
      <div className="flex flex-col gap-2">
        <Label htmlFor={field.name}>{field.label}</Label>
        {(field.options as IOption[])?.map((option) => (
          <div className="flex items-center space-x-2" key={option.value}>
            <Checkbox id={option.value} />
            <Label htmlFor={option.value}>{option.label}</Label>
          </div>
        ))}
      </div>
    ),
    range: (
      <div className="flex flex-col gap-3">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Slider
          defaultValue={[0]}
          max={field.max}
          min={field.min}
          step={1}
          id={field.name}
        />
      </div>
    ),
    textarea: (
      <div className="flex flex-col gap-1.5">
        <Label htmlFor={field.name}>{field.label}</Label>
        <Textarea
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          className="resize-none"
        />
      </div>
    ),
  };

  const elementType = field.fieldType as keyof typeof formElements;

  if (!formElements[elementType]) {
    console.error(`Element type ${elementType} is not supported`);
    return null;
  }
  return formElements[elementType];
};
