import EditPopover from "./EditPopover";
import { IFormField, IOnUpdateFieldArg } from "../types";
import DeleteDialog from "./DeleteDialog";

type Props = {
  defaultValue: IFormField;
  onUpdate: (data: IOnUpdateFieldArg) => void;
  onDelete: () => void;
};

export default function FieldActions({
  defaultValue,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <div className="flex items-center gap-1">
      <EditPopover defaultValue={defaultValue} onUpdate={onUpdate} />

      <DeleteDialog onClick={onDelete} />
    </div>
  );
}
