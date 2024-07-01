import { type ITheme, THEMES } from "@/app/themes";
import { create } from "zustand";
import { IForm } from "@/app/(main)/edit-form/types";

export interface IFormStore {
  form: IForm | null;
  selectedTheme: ITheme;
  selectedBackground: string;
  setForm: (form: IForm) => void;
  setTheme: (theme: ITheme) => void;
  setSelectedBackground: (background: string) => void;
}

export const useFormStore = create<IFormStore>((set) => ({
  form: null,
  selectedTheme: THEMES[0],
  selectedBackground: "",
  setForm: (form) => set({ form }),
  setTheme: (theme) => set({ selectedTheme: theme }),
  setSelectedBackground: (background) =>
    set({ selectedBackground: background }),
}));
