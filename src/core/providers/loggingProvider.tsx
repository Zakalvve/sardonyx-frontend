'use client';

import React, {
    useState,
    useEffect,
    ReactNode,
    useCallback,
} from 'react';

import * as signalR from '@microsoft/signalr';
import { LogEntry } from '@/core/types/logging';
import { LoggingContext } from '@/core/context/loggingContext';

export const LoggingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [connection, setConnection] = useState<signalR.HubConnection | null>(null);

    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7071/loggingHub')
            .withAutomaticReconnect()
            .configureLogging(signalR.LogLevel.Information)
            .build();

        setConnection(newConnection);
        return () => {
            newConnection.stop();
        };
    }, []);

    const connect = useCallback(async () => {
        if (!connection) return;

        connection.on('ReceiveLogMessage', (level: string, message: string, timestamp: string) => {
            setLogs((prevLogs) => [...prevLogs, { level, message, timestamp }]);
        });

        try {
            await connection.start();
            console.log('SignalR connected');
        } catch (err) {
            console.error('Connection failed: ', err);
        }
    }, [connection]);

    const disconnect = useCallback(async () => {
        if (connection) {
            await connection.stop();
            console.log('SignalR disconnected');
        }
    }, [connection]);

    return (
        <LoggingContext.Provider value={{ logs, connect, disconnect }}>
            {children}
        </LoggingContext.Provider>
    );
};