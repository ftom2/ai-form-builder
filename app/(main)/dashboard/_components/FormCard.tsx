import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IForm } from "@/app/(main)/edit-form/types";

import { Edit, Share2 } from "lucide-react";
import Link from "next/link";
import MyTooltip from "@/components/MyTooltip";
import DeleteDialog from "@/components/DeleteDialog";
import { ShareButton } from "@/components/ShareButton";

type Props = {
  form: IForm;
  id: number;
  handleDelete: (id: number) => void;
};

export function FormCard({ form, id, handleDelete }: Props) {
  return (
    <Card className="flex flex-col relative">
      <div className="absolute top-4 right-4">
        <DeleteDialog
          onClick={() => handleDelete(id)}
          description="Are you sure? This will permanently delete the form!"
        />
      </div>
      <CardHeader className="flex-1">
        <CardTitle className="text-lg flex items-center justify-between ">
          <span className="max-w-72 text-balance">{form.title}</span>
        </CardTitle>
        <CardDescription>{form.subheading}</CardDescription>
      </CardHeader>
      <hr />
      <CardFooter className="flex justify-between items-center p-6">
        <ShareButton title={form.title} text={form.subheading} id={id} />
        <MyTooltip content="Edit">
          <Link href={`/edit-form/${id}`}>
            <Edit className="h-5 w-5 text-green-500 cursor-pointer" />
          </Link>
        </MyTooltip>
      </CardFooter>
    </Card>
  );
}
