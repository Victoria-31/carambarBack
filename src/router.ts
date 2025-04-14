import express from "express";

const router = express.Router();

//Define your imports here
/* ************************************************************************* */

import jokeActions from "./modules/joke/jokeActions";

/**
 * @swagger
 * /api/jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste de blagues
 */
router.get("/api/jokes", jokeActions.browse);

/**
 * @swagger
 * /api/jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     responses:
 *       200:
 *         description: Une blague au hasard
 */
router.get("/api/jokes/random", jokeActions.random);

/**
 * @swagger
 * /api/jokes/{id}:
 *   get:
 *     summary: Récupère une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *       404:
 *         description: Blague non trouvée
 */
router.get("/api/jokes/:id", jokeActions.read);

/**
 * @swagger
 * /api/jokes:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blague ajoutée
 *       400:
 *         description: Données invalides
 */
router.post("/api/jokes", jokeActions.add);

export default router;
