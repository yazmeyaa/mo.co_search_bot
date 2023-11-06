import "./paths";
import { bot } from "./modules";
import { controllers } from "@commands/controllers";

bot.startPolling();
bot.on("message", controllers.text);
