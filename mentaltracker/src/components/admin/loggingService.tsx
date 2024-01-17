// loggingService.ts
import path from 'path';

// Define the log file path
const logFilePath = path.join(__dirname, 'log.txt');

// Create a function to log events
export const logEvent = (eventType: string, details: string) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${eventType}] ${timestamp} ${details}\n`;

  // Append the log entry to the log file
  //fs.appendFileSync(logFilePath, logEntry, 'utf-8');
};

// Create a function to get all logs
export const getAllLogs = () => {
  try {
    // Read the log file and return its content
    const logContent = '0' ;
    return logContent.split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error reading log file');
    return [];
  }
};
