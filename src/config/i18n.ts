import { I18n } from "i18n";
import path from "path";

const i18n = new I18n({
  locales: ["ru", "en"],
  defaultLocale: "ru",
  directory: path.join(__dirname, "../locales"),
  logWarnFn: console.warn,
  logErrorFn: console.error,
});

export { i18n };
