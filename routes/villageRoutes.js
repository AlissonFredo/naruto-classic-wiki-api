const express = require("express");
const VillageController = require("../controllers/VillageController");

const router = express.Router();

/**
 * @swagger
 * /villages:
 *   get:
 *     summary: Returns a paginated list of villages
 *     description: Fetches all villages registered in the system with pagination.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: Page number (must be greater than 0).
 *     responses:
 *       200:
 *         description: Village list returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalRecords:
 *                   type: integer
 *                   example: 50
 *                 totalPages:
 *                   type: integer
 *                   example: 9
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
 *                         example: "Konohagakure"
 *                       about:
 *                         type: string
 *                         example: "The Hidden Leaf Village, home to the strongest ninja and Hokages."
 *                       url:
 *                         type: string
 *                         example: "https://example.com/images/konohagakure.jpg"
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-03-11T01:46:37.548Z"
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         example: "2025-03-11T01:46:37.548Z"
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
 *         description: Server error while searching for villages
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error finding all villages"
 */
router.get("/villages", VillageController.findAll);

/**
 * @swagger
 * /villages/{id}:
 *   get:
 *     summary: Returns a specific village by ID
 *     description: Fetches a village from the system based on the given ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           example: 1
 *         required: true
 *         description: The ID of the village to retrieve.
 *     responses:
 *       200:
 *         description: Village found successfully
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
 *                   example: "Konohagakure"
 *                 about:
 *                   type: string
 *                   example: "The Hidden Leaf Village, home to the strongest ninja and Hokages."
 *                 url:
 *                   type: string
 *                   example: "https://example.com/images/konohagakure.jpg"
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
 *         description: Village not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Village not found"
 *       500:
 *         description: Server error while searching for the village
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error finding id village"
 */
router.get("/villages/:id", VillageController.find);

module.exports = router;
