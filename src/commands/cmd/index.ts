import { cmdStartHandler } from "./start";

export const commandsMap = {
  start: cmdStartHandler,
} as const;

type CommandsMapKeys = keyof typeof commandsMap;
type CommandsMapValues = (typeof commandsMap)[CommandsMapKeys];

export function getCommand(key: CommandsMapKeys): CommandsMapValues {
  return commandsMap[key];
}
