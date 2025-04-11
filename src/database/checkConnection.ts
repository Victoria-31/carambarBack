import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./src/database/database.sqlite",
});

export const checkConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Database connection successful.");
	} catch (error) {
		console.error("Unable to connect to the database : ", error);
	}
};
