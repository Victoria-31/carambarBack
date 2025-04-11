import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";

const Joke = sequelize.define("Joke", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	question: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	answer: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

export { Joke };
