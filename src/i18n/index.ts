import en from './en.json'
import sv from './sv.json'

export const dictionaries = { en, sv } as const
export type Locale = keyof typeof dictionaries
export type Dictionary = typeof en

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries.en
}
