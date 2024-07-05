"use client";
import FormUI from "@/app/(main)/edit-form/_components/FormUI";
import { componentsToFormElementsMapper } from "@/app/(main)/edit-form/_components/componentsMapper";
import { GetFormDataResponse, IForm } from "@/app/(main)/edit-form/types";
import { getFormData } from "@/app/actions";
import { useFormStore } from "@/app/store/useFormStore";
import { THEMES } from "@/app/themes";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useMemo } from "react";

type Props = {
  params: { formId: number };
};

export default function PreviewFormPage({ params: { formId } }: Props) {
  const { user } = useUser();
  const { setSelectedTheme } = useFormStore();
  const [formData, setFormData] = React.useState<GetFormDataResponse | null>(
    null
  );

  const json: IForm = useMemo(() => {
    if (formData) {
      return JSON.parse(formData.jsonform);
    }
    return null;
  }, [formData]);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        const response = await getFormData(
          formId,
          user.primaryEmailAddress?.emailAddress!
        );
        const [data] = response;
        setFormData(data);
        // get theme from themes array
        const selectedTheme = THEMES.find(
          (theme) => theme.theme === data.theme
        );
        setSelectedTheme(selectedTheme || THEMES[0]);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId, user]);
  return (
    <div
      className={`${
        formData?.style === "dark" ? "dark" : "light"
      } min-h-screen overflow-auto grid place-items-center py-5`}
      style={{
        backgroundImage: formData?.background || "white",
      }}
    >
      {json && <FormUI json={json} preview />}
    </div>
  );
}
