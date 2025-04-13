import { jokeRepository } from "./jokeRepository";
import type { RequestHandler } from "express";

type Joke = {
	question: string;
	answer: string;
};

const browse: RequestHandler = async (req, res, next) => {
	try {
		const jokes = await jokeRepository.getAllJokes();
		res.json(jokes);
	} catch (err) {
		next(err);
	}
};

const add: RequestHandler = async (req, res, next) => {
	const newJoke = {
		question: req.body.question,
		answer: req.body.answer,
	};

	if (!newJoke) {
		res.status(400).json({ message: "Content is required" });
		return;
	}

	try {
		const joke = await jokeRepository.addJoke(newJoke);
		res.status(201).json(joke);
	} catch (err) {
		next(err);
	}
};

const read: RequestHandler = async (req, res, next) => {
	const { id } = req.params;

	if (Number.isNaN(Number(id))) {
		res.status(400).json({ message: "Invalid ID" });
		return;
	}

	try {
		const joke = await jokeRepository.getJokeById(Number(id));
		res.json(joke);
	} catch (err) {
		next(err);
	}
};

const random: RequestHandler = async (req, res, next) => {
	try {
		const joke = await jokeRepository.getRandomJoke();
		res.json(joke);
	} catch (err) {
		next(err);
	}
};

export default { browse, add, read, random };
