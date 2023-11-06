import { useReplyMessage } from "@helpers/bot";
import { useI18n } from "@helpers/i18n";
import { Message } from "node-telegram-bot-api";

export async function createPost(msg: Message): Promise<void> {
  const reply = useReplyMessage(msg);
  const { getTranslation } = useI18n(msg);

  reply(getTranslation("sendMessageAsTemplate"));
}
