"use client";
import { getFormData, updateFormData } from "@/app/actions";
import Page from "@/components/Page";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { IForm } from "../types";
import FormUI from "../_components/FormUI";
import { toast } from "sonner";

type Props = {
  params: { id: number };
};

export default function EditFormPage({ params: { id } }: Props) {
  const [formData, setFormData] = useState<any>(null);
  const { user } = useUser();

  const json: IForm = useMemo(() => {
    if (!formData) return null;
    return JSON.parse(formData.jsonform);
  }, [formData]);

  useEffect(() => {
    async function fetchData() {
      const response = await getFormData(
        id,
        user!.primaryEmailAddress?.emailAddress!
      );
      setFormData(response[0]);
    }
    if (user) {
      fetchData();
    }
  }, [id, user]);

  async function onJsonUpdate(json: string) {
    setFormData({ ...formData, jsonform: json });
    await updateFormData(
      id,
      user?.primaryEmailAddress?.emailAddress || "",
      json
    );

    toast.success("Form updated successfully");
  }
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 p-4 border rounded-lg h-[calc(100vh-200px)]">
          Controls
        </div>
        <div className="col-span-2 p-4 border rounded-lg h-[calc(100vh-200px)] overflow-auto">
          <FormUI json={json} onUpdate={onJsonUpdate} />
        </div>
      </div>
    </Page>
  );
}
