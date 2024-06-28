import { useState } from "react";
import { IForm } from "../types";
import { componentsToFormElementsMapper } from "./componentsMapper";

type Props = {
  json: IForm;
};

export default function FormUI({ json }: Props) {
  const [date, setDate] = useState(new Date());
  if (!json) return "Loading...";
  console.log({ json });
  return (
    <div className=" p-4 flex flex-col items-center">
      <h2 className="font-semibold text-xl text-center">{json.title}</h2>
      <p className="text-gray-500 text-center">{json.subheading}</p>

      <form className="mt-5 max-w-md w-full flex flex-col gap-5" noValidate>
        {json.fields.map((field) => (
          <div key={field.name}>
            {componentsToFormElementsMapper(field, { date, setDate })}
          </div>
        ))}
      </form>
    </div>
  );
}
