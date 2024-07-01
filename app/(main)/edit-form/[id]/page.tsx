"use client";
import { getFormData, updateFormData, updateFormMetadata } from "@/app/actions";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { IForm } from "../types";
import FormUI from "../_components/FormUI";
import { toast } from "sonner";
import StylesController from "../_components/StylesController";

import { useFormStore } from "@/app/store/useFormStore";
import { THEMES } from "@/app/themes";

type Props = {
  params: { id: number };
};

export default function EditFormPage({ params: { id } }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();

  const setForm = useFormStore((state) => state.setForm);
  const { form, setSelectedBackground, setSelectedTheme } = useFormStore();
  const selectedBG = useFormStore((state) => state.selectedBackground);

  const fetchData = useCallback(async () => {
    if (user) {
      setIsLoading(true);
      const response = await getFormData(
        id,
        user.primaryEmailAddress?.emailAddress!
      );
      const [data] = response;
      setForm(JSON.parse(data.jsonform));
      setSelectedBackground(data.background ?? "");
      const selectedTheme = THEMES.find((theme) => theme.theme === data.theme);
      setSelectedTheme(selectedTheme ?? THEMES[0]);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, user]);

  useEffect(() => {
    fetchData();
  }, [fetchData, setForm]);

  useEffect(() => {
    const unsubscribe = useFormStore.subscribe(async (state, prevState) => {
      if (
        state.selectedTheme !== prevState.selectedTheme ||
        state.selectedBackground !== prevState.selectedBackground
      ) {
        if (!user) {
          console.error("User not found");
          return;
        }
        await updateFormMetadata({
          id,
          email: user?.primaryEmailAddress?.emailAddress || "",
          theme: state.selectedTheme.theme,
          background: state.selectedBackground,
          style: state.selectedTheme["color-scheme"],
        });
      }
    });

    // Cleanup: unsubscribe when the component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const onJsonUpdate = useCallback(
    async (json: string) => {
      setForm(JSON.parse(json));
      await updateFormData(
        id,
        user?.primaryEmailAddress?.emailAddress || "",
        json
      );
      toast.success("Form updated successfully");
    },

    [id, setForm, user?.primaryEmailAddress?.emailAddress]
  );

  return (
    <Page>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="hover:bg-transparent mb-5 hover:font-bold"
      >
        <Link href="/dashboard">
          <ArrowLeft size={16} className="shrink-0" />
          Back
        </Link>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-theme="light">
        <div className="col-span-1 p-4 border rounded-lg h-[calc(100vh-200px)]">
          <StylesController isLoading={isLoading} />
        </div>
        <div
          className="col-span-2 p-4 border rounded-lg h-[calc(100vh-200px)] overflow-auto"
          style={{ background: selectedBG }}
        >
          <FormUI json={form} onUpdate={onJsonUpdate} />
        </div>
      </div>
    </Page>
  );
}
