"use server";

import { db } from "@/db";
import { jsonForms } from "@/db/schema";
import { and, desc, eq } from "drizzle-orm";
import { UpdateFormMetadataRequest } from "./(main)/edit-form/types";

export async function getAllForms(email: string) {
  const response = await db
    .select()
    .from(jsonForms)
    .where(eq(jsonForms.createdBy, email))
    .orderBy(desc(jsonForms.createdAt));

  return response;
}

export async function getFormData(id: number, email: string) {
  const response = await db
    .select()
    .from(jsonForms)
    .where(and(eq(jsonForms.id, id), eq(jsonForms.createdBy, email)));

  return response;
}

export async function updateFormData(id: number, email: string, json: string) {
  return db
    .update(jsonForms)
    .set({ jsonform: json })
    .where(and(eq(jsonForms.id, id), eq(jsonForms.createdBy, email)));
}

export async function updateFormMetadata({
  id,
  email,
  theme,
  background,
  style,
}: UpdateFormMetadataRequest) {
  return db
    .update(jsonForms)
    .set({ theme, background, style })
    .where(and(eq(jsonForms.id, id), eq(jsonForms.createdBy, email)));
}
