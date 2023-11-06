import { useI18n, useReplyMessage } from "@helpers/index";
import { getKeyboard } from "@templates/keyboards";
import { Message } from "node-telegram-bot-api";

export async function cmdStartHandler(msg: Message): Promise<void> {
  const { getTranslation, userLocale } = useI18n(msg);
  const replyToMessage = useReplyMessage(msg);
  const message = getTranslation("startCmd", "mo.co Search");

  replyToMessage(message, {
    reply_markup: {
      keyboard: getKeyboard("start", userLocale),
      resize_keyboard: true
    },
  });
}
