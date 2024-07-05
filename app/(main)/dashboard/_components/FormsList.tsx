"use client";
import { getAllForms } from "@/app/actions";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { GetFormDataResponse } from "../../edit-form/types";

import { FormCard } from "./FormCard";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function FormsList({ className }: Props) {
  const { user } = useUser();
  const [forms, setForms] = useState<GetFormDataResponse[]>([]);
  async function getData(email: string) {
    const response = await getAllForms(email);

    setForms(response);
  }

  useEffect(
    () => {
      user && getData(user?.primaryEmailAddress?.emailAddress!);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  return (
    <div className={`grid grid-cols-auto-fit gap-4 ${className}`}>
      {forms.map((form) => (
        <FormCard key={form.id} id={form.id} form={JSON.parse(form.jsonform)} />
      ))}
    </div>
  );
}
