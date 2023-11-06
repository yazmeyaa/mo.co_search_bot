import { config } from "dotenv";
config();

export function getEnvironmentVariable(key: string): string | never {
    if(!key) throw new Error('getEnvironmentVariable: Missed "key" argument');
    const value = process.env[key];
    if(!value) throw new Error(`getEnvironmentVariable: Cannot get variable named ${key}.`)

    return value;
}