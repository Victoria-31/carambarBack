import { Joke } from "../../models/Joke";

export const jokeRepository = {
	addJoke: async (content: string) => {
		try {
			const joke = await Joke.create({ content });
			return joke;
		} catch (error) {
			throw new Error("Error while adding the joke");
		}
	},

	getAllJokes: async () => {
		try {
			return await Joke.findAll();
		} catch (error) {
			console.error("Actual error:", error);
			throw new Error("Error while retrieving the jokes");
		}
	},

	getJokeById: async (id: number) => {
		try {
			const joke = await Joke.findByPk(id);
			if (!joke) {
				throw new Error("Joke not found");
			}
			return joke;
		} catch (error) {
			throw new Error("Error while retrieving the joke");
		}
	},

	getRandomJoke: async () => {
		try {
			const count = await Joke.count();
			const randomIndex = Math.floor(Math.random() * count);
			const randomJoke = await Joke.findAll({
				offset: randomIndex,
				limit: 1,
			});
			return randomJoke[0];
		} catch (error) {
			throw new Error("Error while retrieving a random joke");
		}
	},
};
