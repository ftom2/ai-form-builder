import React from "react";

type Props = {
  params: { formId: number };
};

export default function PreviewFormPage({ params: { formId } }: Props) {
  return <div>PreviewFormPage: {formId}</div>;
}
