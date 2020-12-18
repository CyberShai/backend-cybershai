import dotnet from 'dotenv';
import path from 'path';

// Get env path
const envPath = path.resolve(__dirname, `${process.env.ENV_FILE_PATH}`);

// Load variables into .env file
dotnet.config({ path: envPath });

// Assign variables into object
const config = {
  mysql: {
    host: process.env.MYSQL_HOST || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASSWORD || "",
  },
  port: Number(process.env.PORT) || 4000
  // test: process.env.CONFIG_TEST || ""
};

export default config;