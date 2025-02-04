'use client'; 

import { createContext } from 'react';
import { LoggingContextValue } from '@/core/types/logging';

export const LoggingContext = createContext<LoggingContextValue>({
    logs: [],
    connect: async () => { },
    disconnect: async () => { },
});