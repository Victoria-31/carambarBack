import "dotenv/config";

import { checkConnection } from "./database/checkConnection";

import app from "./app";

const port = process.env.PORT;

checkConnection();

import { sequelize } from "./database/db";

sequelize
	.sync({ force: true })
	.then(() => {
		console.log("Tables synced");
	})
	.catch((err) => {
		console.error("Sync error:", err);
	});

app
	.listen(port, () => {
		console.info(`Server is listening on port ${port}`);
		console.log(`Swagger docs dispo sur http://localhost:${port}/api-docs`);
	})
	.on("error", (err: Error) => {
		console.error("Error:", err.message);
	});
