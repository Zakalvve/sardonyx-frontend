'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { useLogging } from '@/core/hooks/use-logging';
import { Checkbox } from '@/core/components/ui/checkbox';
import { Button} from '@/core/components/ui/button';

export default function LogConsole() {
  const { logs, connect, disconnect } = useLogging();
  const [ enableAutoScroll, setEnableAutoScroll ] = useState(true);

  const virtuosoRef = useRef<VirtuosoHandle>(null);
  
  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  const Controls = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log("click")
      virtuosoRef.current?.scrollToIndex({ index: logs.length - 1, align: "end" });
    }
    return (
      <div className="flex justify-end mt-3 gap-3 items-center">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="auto-scroll-option"
            checked={enableAutoScroll}
            onCheckedChange={(checked: boolean) => setEnableAutoScroll(checked)}
          />
          <label
            htmlFor=""
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Auto scroll
          </label>
        </div>
        <Button
          onClick={handleClick}
        >
          Scroll to Bottom
        </Button>
      </div>
    );
  };

  const handleFollow = useMemo(() => {
    return (isAtBottom: boolean) => {
      if (enableAutoScroll && isAtBottom) {
        return 'smooth'
      } else {
        return false
      }
    }
  }, [enableAutoScroll])

  return (
    <>
      <div className="bg-black text-white font-mono w-full relative aspect-video border p-3 rounded-lg">
        <Virtuoso
          ref={virtuosoRef}
          data={logs}
          itemContent={(index, log) => (
            <div>
              {log.timestamp} [{log.level}] {log.message}
            </div>
          )}
          followOutput={handleFollow}
        />
      </div>

      <Controls />
    </>
  );
}