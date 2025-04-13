import express from "express";

const router = express.Router();

//Define your imports here
/* ************************************************************************* */

import jokeActions from "./modules/joke/jokeActions";

router.get("/api/jokes", jokeActions.browse);
router.get("/api/jokes/random", jokeActions.random);
router.get("/api/jokes/:id", jokeActions.read);
router.post("/api/jokes", jokeActions.add);

export default router;
