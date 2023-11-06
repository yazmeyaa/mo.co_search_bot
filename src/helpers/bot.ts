import { bot } from "@modules/bot";
import { Message, SendMessageOptions } from "node-telegram-bot-api";

export function useReplyMessage(msg: Message) {
  const chatId = msg.chat.id;
  const reply_to_message_id = msg.message_id;

  function replyToMessage(message: string, options?: Omit<SendMessageOptions, 'reply_to_message_id'>) {
    const sendMessageOptions = {
      reply_to_message_id,
    };
    if (options) {
      Object.assign(sendMessageOptions, options, { reply_to_message_id });
    }
    bot.sendMessage(chatId, message, sendMessageOptions);
  }

  return replyToMessage;
}
