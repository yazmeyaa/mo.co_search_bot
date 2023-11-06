import { i18n } from "@config/i18n";
import { TranslateOptions } from "i18n";
import { KeyboardButton } from "node-telegram-bot-api";

const startKeyboard: string[][] = [
  ["createPost", "createPost", "createPost"],
  ["createPost", "createPost", "createPost"],
  ["createPost", "createPost", "createPost"],
];

const keyboardsMap = {
  start: startKeyboard,
};
type KeyboardMapKeys = keyof typeof keyboardsMap;

export function getKeyboard(
  key: KeyboardMapKeys,
  userLocale?: string
): KeyboardButton[][] {
  const keyboard = fillKeyboard(keyboardsMap[key], userLocale);
  return keyboard;
}

function fillKeyboard(
  keyboardWithPhrases: string[][],
  locale: string = "ru"
): KeyboardButton[][] {
  const filledKeyboard = keyboardWithPhrases.map((row) => {
    const newRow: KeyboardButton[] = [];
    row.forEach((phrase) => {
      const i18nPhraseParams: TranslateOptions = { phrase, locale };
      const text = i18n.__(i18nPhraseParams);
      newRow.push({ text });
    });
    return newRow;
  });

  return filledKeyboard;
}
