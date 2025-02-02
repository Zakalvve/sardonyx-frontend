export interface LogEntry {
    timestamp: string;
    level: string;
    message: string;
}

export interface LoggingContextValue {
    logs: LogEntry[];
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
}