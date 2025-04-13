import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "src/database/database.sqlite",
});

sequelize
	.authenticate()
	.then(() => {
		console.info("Database connection successful.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database : ", err);
	});

export { sequelize };
