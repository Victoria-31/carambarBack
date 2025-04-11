import { jokeRepository } from "./jokeRepository";
import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res, next) => {
	try {
		const jokes = await jokeRepository.getAllJokes();
		res.json(jokes);
	} catch (err) {
		next(err);
	}
};

export default { browse };
