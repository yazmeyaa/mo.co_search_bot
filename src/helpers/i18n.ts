import { i18n } from "@config/i18n";
import { Message } from "node-telegram-bot-api";

export function useI18n(msg: Message) {
  let locale = "ru";
  if (msg.from && msg.from.language_code) {
    const userLocale = msg.from.language_code;
    const availableLocales = i18n.getLocales();
    if (availableLocales.includes(userLocale)) locale = userLocale;
  }

  function getTranslation(key: string, ...replace: string[]): string {
    const translation = i18n.__({ phrase: key, locale }, ...replace);
    return translation;
  }

  return { getTranslation, userLocale: locale };
}

export function getKeyByPhrase(phrase: string): string | null {
  const globalTranslations = i18n.getCatalog();
  const languages = Object.entries(globalTranslations);
  let findKey = null;

  for (const [_, dictionary] of languages) {
    for (const key in dictionary) {
      if (dictionary[key] === phrase) findKey = key;
    }
  }

  return findKey;
}
