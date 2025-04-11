import express from "express";

const router = express.Router();

//Define your imports here
/* ************************************************************************* */

import jokeActions from "./modules/joke/jokeActions";

router.get("/jokes", jokeActions.browse);

export default router;
