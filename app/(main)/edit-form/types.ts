export interface IOption {
  label: string;
  value: string;
}
export interface IForm {
  title: string;
  subheading: string;
  fields: IFormField[];
}

// create an interface for the form fields
export interface IFormField {
  name: string;
  placeholder: string;
  label: string;
  fieldType: FieldType;
  required: boolean;
  options?: IOption[];
  min?: number;
  max?: number;
}

// create an enum for the field types
export enum FieldType {
  Text = "text",
  Email = "email",
  Password = "password",
  Dropdown = "dropdown",
  Checkbox = "checkbox",
  Date = "date",
  Radio = "radio",
  Slider = "range",
  CheckboxGroup = "checkbox-group",
  RadioGroup = "radio-group",
}
