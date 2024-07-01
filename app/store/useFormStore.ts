import { type ITheme, THEMES } from "@/app/themes";
import { create } from "zustand";
import { IForm } from "@/app/(main)/edit-form/types";

export interface IFormStore {
  form: IForm | null;
  selectedTheme: ITheme;
  setForm: (form: IForm) => void;
  setTheme: (theme: ITheme) => void;
}

export const useFormStore = create<IFormStore>((set) => ({
  form: null,
  selectedTheme: THEMES[0],
  setForm: (form) => set({ form }),
  setTheme: (theme) => set({ selectedTheme: theme }),
}));
