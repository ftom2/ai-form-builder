import { Label } from "@/components/ui/label";
import { IForm } from "../types";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  json: IForm;
};

export default function FormUI({ json }: Props) {
  if (!json) return "Loading...";
  console.log({ json });
  return (
    <div className=" p-4 flex flex-col items-center">
      <h2 className="font-semibold text-xl text-center">{json.title}</h2>
      <p className="text-gray-500 text-center">{json.subheading}</p>

      <form className="mt-5 max-w-md w-full flex flex-col gap-5" noValidate>
        {json.fields.map((field) =>
          field.fieldType !== "dropdown" && field.fieldType !== "checkbox" ? (
            <div className="grid w-full  items-center gap-1.5" key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input id={field.name} name={field.name} type={field.fieldType} />
            </div>
          ) : field.fieldType === "dropdown" ? (
            <div>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Select>
                <SelectTrigger className="w-full" id={field.name}>
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            field.fieldType === "checkbox" && (
              <div className="flex w-full  items-center gap-1.5">
                <Checkbox id={field.name} />
                <Label htmlFor={field.name}>{field.label}</Label>
              </div>
            )
          )
        )}
      </form>
    </div>
  );
}
