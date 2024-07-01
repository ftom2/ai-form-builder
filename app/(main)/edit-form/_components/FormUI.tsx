"use client";
import { useState } from "react";
import { IForm, IOnUpdateFieldArg } from "../types";
import { componentsToFormElementsMapper } from "./componentsMapper";
import FieldActions from "./FieldActions";
import { useFormStore } from "@/app/store/useFormStore";

type Props = {
  json: IForm | null;

  onUpdate: (json: string) => void;
};

export default function FormUI({ json, onUpdate }: Props) {
  const [date, setDate] = useState(new Date());
  const selectedTheme = useFormStore((state) => state.selectedTheme);

  function handleFieldUpdate(data: IOnUpdateFieldArg, index: number) {
    if (!json) return;
    const newJson = { ...json };
    // get the field to update
    const fieldToUpdate = newJson.fields[index];
    // update the field
    newJson.fields[index] = { ...fieldToUpdate, ...data };
    // update the state
    onUpdate(JSON.stringify(newJson));
  }

  function handleOnFieldDelete(index: number) {
    if (!json) return;
    const newJson = { ...json };
    // remove the field
    newJson.fields.splice(index, 1);
    // update the state
    onUpdate(JSON.stringify(newJson));
  }

  if (!json)
    return (
      <div className="grid place-items-center h-full text-xl">Loading...</div>
    );
  return (
    <div
      className={`p-4 flex flex-col items-center max-w-2xl m-auto ${
        selectedTheme["color-scheme"] === "dark" ? "dark" : ""
      }`}
      data-theme={selectedTheme.theme}
    >
      <h2 className="font-semibold text-xl text-center">{json.title}</h2>
      <p className="text-gray-500 text-center">{json.subheading}</p>

      <form className="mt-5 max-w-md w-full flex flex-col gap-5" noValidate>
        {json.fields.map((field, idx) => (
          <div key={field.name} className="flex ">
            <div className="flex-1">
              {componentsToFormElementsMapper(field, { date, setDate })}
            </div>
            <div>
              <FieldActions
                defaultValue={field}
                onUpdate={(data) => handleFieldUpdate(data, idx)}
                onDelete={() => handleOnFieldDelete(idx)}
              />
            </div>
          </div>
        ))}
      </form>
      <button className="mt-5 w-full max-w-xs btn btn-primary">Button</button>
    </div>
  );
}
