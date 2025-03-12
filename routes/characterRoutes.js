const express = require("express");
const CharacterController = require("../controllers/CharacterController");

const router = express.Router();

/**
 * @swagger
 * /characters:
 *   get:
 *     summary: Returns a paginated list of characters
 *     description: Gets all characters registered in the system with pagination.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: Page number (must be greater than 0)
 *     responses:
 *       200:
 *         description: Character list returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalRecords:
 *                   type: integer
 *                   example: 100
 *                 totalPages:
 *                   type: integer
 *                   example: 17
 *                 currentPage:
 *                   type: integer
 *                   example: 1
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: Naruto Uzumaki
 *                       about:
 *                         type: string
 *                         example: The protagonist, a hyperactive ninja who dreams of becoming Hokage. He has the Nine-Tailed Fox sealed inside him, which grants him great power.
 *                       url:
 *                         type: string
 *                         example: https://classic.exame.com/wp-content/uploads/2018/02/naruto.gif?w=1024
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-03-11T01:46:37.548Z
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: 2025-03-11T01:46:37.548Z
 *       400:
 *         description: Invalid `page` parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Page must be a valid number"
 *       500:
 *         description: Server error while searching for characters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error finding all characters"
 */
router.get("/characters", CharacterController.findAll);

/**
 * @swagger
 * /characters/{id}:
 *   get:
 *     summary: Get a character by ID
 *     description: Fetches a single character from the database using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: The unique identifier of the character.
 *     responses:
 *       200:
 *         description: Character found successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: Naruto Uzumaki
 *                 about:
 *                   type: string
 *                   example: "The protagonist, a hyperactive ninja who dreams of becoming Hokage. He has the Nine-Tailed Fox sealed inside him, which grants him great power."
 *                 url:
 *                   type: string
 *                   example: "https://classic.exame.com/wp-content/uploads/2018/02/naruto.gif?w=1024"
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-03-11T01:46:37.548Z"
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-03-11T01:46:37.548Z"
 *       400:
 *         description: Invalid `id` parameter
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Id must be a valid number"
 *       404:
 *         description: Character not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Character not found"
 *       500:
 *         description: Server error while searching for the character
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error finding id character"
 */
router.get("/characters/:id", CharacterController.find);

module.exports = router;
