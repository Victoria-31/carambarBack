import sqlite3 from "sqlite3";
import { open } from "sqlite";
import fs from "node:fs";
import path from "node:path";

const schemaPath = path.join(__dirname, "../src/database/schema.sql");

const migrate = async () => {
	try {
		const db = await open({
			filename: "src/database/database.sqlite",
			driver: sqlite3.Database,
		});

		const schema = fs.readFileSync(schemaPath, "utf-8");

		await db.exec(schema);

		console.log("Database migrated successfully");
		db.close();
	} catch (err) {
		console.error("Migration error:", err);
	}
};

migrate();
