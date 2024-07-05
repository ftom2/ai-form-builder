"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { db } from "@/db";
import { jsonForms } from "@/db/schema";
import { chatSession } from "@/lib/gemini";
import { useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const CHAT_MESSAGE_TEMPLATE =
  ", on the basis of the description please create a form in json format with form title form subheading, form fields with name, placeholder, label, fieldType and required set to true or false.return just the json as simple text with no decoration like ```json etc. The fieldType of fields with options should be 'dropdown', options should always have the form of {label: string, value: string} , for checkbox groups fieldType should be 'checkbox-group' and for checkboxes fieldType should be 'checkbox'. For radio groups fieldType should be 'radio-group' and for radio buttons fieldType should be 'radio' for sliders/range field type should be 'range'.";

export function CreateFormDialog() {
  const { user } = useUser();
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    if (!userInput) return;
    setLoading(true);
    toast.info("Creating form...");
    const response = await chatSession.sendMessage(
      `Description: ${userInput} ${CHAT_MESSAGE_TEMPLATE}`
    );
    if (response.response.text()) {
      const id = await saveData(response.response.text());
      router.push(`/edit-form/${id}`);
    }
    setLoading(false);
  }

  async function saveData(json: string) {
    const result = await db
      .insert(jsonForms)
      .values({
        jsonform: json,
        createdBy: user!.primaryEmailAddress?.emailAddress!,
        createdAt: new Date().toISOString(),
      })
      .returning({ id: jsonForms.id });

    return result[0].id;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Create Form</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Create AI Form</DialogTitle>
        </DialogHeader>
        <div>
          <Textarea
            className="resize-none"
            placeholder="Write a description of your form"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" color="ghost">
              Cancel
            </Button>
          </DialogClose>

          <Button type="submit" onClick={handleSave} disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
function saveData(arg0: string) {
  throw new Error("Function not implemented.");
}
