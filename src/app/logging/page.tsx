'use client';

import React from 'react';
import LogViewer from '@/core/components/logViewer';

const LogsPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl">
        <LogViewer />
      </div>
    </div>
  );
};

export default LogsPage;