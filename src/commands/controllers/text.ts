import { Message } from "node-telegram-bot-api";
import { commandsController } from "./cmd";
import { createPost } from "@commands/text/createPost";
import { getKeyByPhrase } from "@helpers/i18n";

const textHandlersMap = {
  createPost: createPost,
} as const;

export async function textController(msg: Message): Promise<void> {
  /*___ Handle commands ___ */
  const isCommand = isMessageCommand(msg);
  if (isCommand) return commandsController(msg);
  /*___ Handle text messages ___ */

  if (!msg.text) return;

  const key = getKeyByPhrase(msg.text);
  if (key && key in textHandlersMap) {
    const typedKey = key as keyof typeof textHandlersMap;
    return textHandlersMap[typedKey](msg);
  }
}

function isMessageCommand(msg: Message): boolean {
  const testCommandRegex = /^\/.*$/;
  if (!msg.text) return false;
  const normalizedMessage = msg.text.trim();
  return testCommandRegex.test(normalizedMessage);
}
