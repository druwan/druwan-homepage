import en from './en.json'
import sv from './sv.json'

const dictionaries = { en, sv } as const
type Locale = keyof typeof dictionaries
type Dictionary = typeof en

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale as Locale] ?? dictionaries.en
}
