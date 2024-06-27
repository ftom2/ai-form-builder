"use server";

import { db } from "@/db";
import { jsonForms } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function getFormData(id: number, email: string) {
  const response = await db
    .select()
    .from(jsonForms)
    .where(and(eq(jsonForms.id, id), eq(jsonForms.createdBy, email)));

  return response;
}
