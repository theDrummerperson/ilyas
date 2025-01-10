type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

export const logger = {
  debug: (message: string, context?: Record<string, unknown>) => {
    logMessage('debug', message, context);
  },
  info: (message: string, context?: Record<string, unknown>) => {
    logMessage('info', message, context);
  },
  warn: (message: string, context?: Record<string, unknown>) => {
    logMessage('warn', message, context);
  },
  error: (message: string, context?: Record<string, unknown>) => {
    logMessage('error', message, context);
  },
};

function logMessage(level: LogLevel, message: string, context?: Record<string, unknown>) {
  if (process.env.NODE_ENV === 'production' && level === 'debug') {
    return;
  }

  const logData: LogMessage = {
    level,
    message,
    timestamp: new Date().toISOString(),
    context,
  };

  switch (level) {
    case 'debug':
      console.debug(JSON.stringify(logData));
      break;
    case 'info':
      console.info(JSON.stringify(logData));
      break;
    case 'warn':
      console.warn(JSON.stringify(logData));
      break;
    case 'error':
      console.error(JSON.stringify(logData));
      break;
  }
}
