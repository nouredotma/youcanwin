export { fr } from "./fr"

import { fr } from "./fr"

export type Language = "fr"

export const translations = {
  fr,
} as const

export const languages = [
  {
    code: "fr" as const,
    name: "Français",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
  },
] as const

export const DEFAULT_LANGUAGE: Language = "fr"
export const LANGUAGE_STORAGE_KEY = "mts-language"
