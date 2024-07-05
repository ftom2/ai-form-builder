import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash } from "lucide-react";
import MyTooltip from "./MyTooltip";

type Props = {
  onClick: () => void;
  title?: string;
  description?: string;
};

export default function DeleteDialog({
  onClick,
  title = "Are you absolutely sure?",
  description = " This action cannot be undone. This will permanently delete the field.",
}: Props) {
  return (
    <AlertDialog>
      <MyTooltip content="Delete">
        <AlertDialogTrigger asChild>
          <Trash className="h-5 w-5 text-destructive cursor-pointer ml-auto top-4 right-4" />
        </AlertDialogTrigger>
      </MyTooltip>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick} className="bg-destructive">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
