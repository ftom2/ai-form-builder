"use client";
import { useParams } from "next/navigation";

type Props = {};

export default function EditFormPage({}: Props) {
  const { id } = useParams();
  return <div>EditFormPage: {id}</div>;
}
