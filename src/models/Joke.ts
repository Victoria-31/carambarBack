import { DataTypes } from "sequelize";
import { sequelize } from "../database/db";

const Joke = sequelize.define(
	"joke",
	{
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
	},
	{
		tableName: "joke",
		timestamps: false,
	},
);

export { Joke };
