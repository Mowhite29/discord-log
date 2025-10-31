declare module 'discord-logging-handler' {
    export type LogLevel = 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';

    export interface DiscordLogOptions {
        level?: LogLevel;
        dev_mode?: boolean;
    }

    export default class DiscordLog {
        constructor(webhookURL: string, options?: DiscordLogOptions);
        log(message: string, level?: LogLevel, error?: Error): void;
    }
}