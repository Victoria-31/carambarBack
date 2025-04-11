// Load environment variables from .env file
import "dotenv/config";

import { checkConnection } from "./database/checkConnection";

import app from "./app";

// Get the port from the environment variables
const port = process.env.APP_PORT;

checkConnection();

app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	})
	.on("error", (err: Error) => {
		console.error("Error:", err.message);
	});
