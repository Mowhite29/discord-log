declare module 'discord-logging-handler' {
    export type LogLevel = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

    export interface DiscordLogOptions {
        level?: LogLevel;
    }

    export default class DiscordLog {
        constructor(webhookURL: string, options?: DiscordLogOptions);
        constructor(webhookURL: string, level?: LogLevel)
        log(message: string, level?: LogLevel, error?: Error): void;
    }
}