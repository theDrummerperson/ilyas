declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        CONTACT_EMAIL?: string;
        // Add other environment variables here
      }
    }
  }
  
  export {};