import { useState } from "react";
import { IForm, IFormField, IOnUpdateFieldArg } from "../types";
import { componentsToFormElementsMapper } from "./componentsMapper";
import FieldActions from "./FieldActions";

type Props = {
  json: IForm;
  onUpdate: (json: string) => void;
};

export default function FormUI({ json, onUpdate }: Props) {
  const [date, setDate] = useState(new Date());

  function handleFieldUpdate(data: IOnUpdateFieldArg, index: number) {
    const newJson = { ...json };
    // get the field to update
    const fieldToUpdate = newJson.fields[index];
    // update the field
    newJson.fields[index] = { ...fieldToUpdate, ...data };
    // update the state
    onUpdate(JSON.stringify(newJson));
  }

  function handleOnFieldDelete(index: number) {
    const newJson = { ...json };
    // remove the field
    newJson.fields.splice(index, 1);
    // update the state
    onUpdate(JSON.stringify(newJson));
  }

  if (!json) return "Loading...";
  console.log({ json });
  return (
    <div className=" p-4 flex flex-col items-center">
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
    </div>
  );
}
