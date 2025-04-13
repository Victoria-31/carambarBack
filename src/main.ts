// Load environment variables from .env file
import "dotenv/config";

import { checkConnection } from "./database/checkConnection";

import app from "./app";

// Get the port from the environment variables
const port = process.env.APP_PORT;

checkConnection();

import { sequelize } from "./database/db"; // ou ton chemin réel
import { Joke } from "./models/Joke"; // ou ton chemin réel

sequelize
	.sync({ force: false }) // force: false pour ne pas recréer la table si elle existe déjà
	.then(() => {
		console.log("Tables synced");
	})
	.catch((err) => {
		console.error("Sync error:", err);
	});

app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
	})
	.on("error", (err: Error) => {
		console.error("Error:", err.message);
	});
