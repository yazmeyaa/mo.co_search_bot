import { getEnvironmentVariable } from "@helpers/index";

const APP_CONFIG = {
  telegram: {
    botApiKey: getEnvironmentVariable("TELEGRAM_BOT_API_KEY"),
  },
} as const;

export { APP_CONFIG };
