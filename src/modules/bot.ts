import Bot from "node-telegram-bot-api";
import { APP_CONFIG } from "@config/index";

const bot = new Bot(APP_CONFIG.telegram.botApiKey);
export { bot };
