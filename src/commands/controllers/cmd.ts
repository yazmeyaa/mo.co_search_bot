import { commandsMap } from "@commands/cmd";
import { Message } from "node-telegram-bot-api";

export async function commandsController(msg: Message): Promise<void> {
  if (!msg.text) return;
  const command = msg.text.slice(1).split(" ")[0]; // Remove "/" symbol;

  if (command in commandsMap) {
    const typedCommand = command as keyof typeof commandsMap;
    commandsMap[typedCommand](msg);
  }
}
