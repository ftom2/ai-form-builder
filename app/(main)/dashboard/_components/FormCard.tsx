import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IForm } from "@/app/(main)/edit-form/types";

import { Edit, Share2, Trash } from "lucide-react";
import Link from "next/link";
import MyTooltip from "@/components/MyTooltip";

type Props = {
  form: IForm;
  id: number;
};

export function FormCard({ form, id }: Props) {
  return (
    <Card className="flex flex-col relative">
      <MyTooltip content="Delete">
        <Trash className="h-5 w-5 text-destructive cursor-pointer ml-auto absolute top-4 right-4" />
      </MyTooltip>
      <CardHeader className="flex-1">
        <CardTitle className="text-lg flex items-center justify-between">
          {form.title}
        </CardTitle>
        <CardDescription>{form.subheading}</CardDescription>
      </CardHeader>
      <hr />
      <CardFooter className="flex justify-between items-center p-6">
        <MyTooltip content="Share">
          <Share2 className="h-5 w-5 text-primary cursor-pointer" />
        </MyTooltip>
        <MyTooltip content="Edit">
          <Link href={`/edit-form/${id}`}>
            <Edit className="h-5 w-5 text-green-500 cursor-pointer" />
          </Link>
        </MyTooltip>
      </CardFooter>
    </Card>
  );
}
