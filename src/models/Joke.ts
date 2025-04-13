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
		tableName: "joke", // Spécifie le nom exact de la table (singulier)
		timestamps: false, // Désactive les colonnes createdAt et updatedAt
	},
);

export { Joke };
