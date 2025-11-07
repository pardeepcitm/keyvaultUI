// src/config/index.ts

type AppConfig = {
    apiBaseUrl: string;
    appName: string;
    enableDebug: boolean;
};

const config: AppConfig = {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "",
    appName: import.meta.env.VITE_APP_NAME || "My React App",
    enableDebug: import.meta.env.VITE_DEBUG === "true",
};

export default config;
