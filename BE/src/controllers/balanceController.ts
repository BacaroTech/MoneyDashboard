//controllers/someController.js
import express, { Request, Response } from "express";
import { queryTest } from "../services/balanceService";
import createBalanceTable from "../models/balanceModel";

let router = express.Router();
createBalanceTable()

router.get("/", async (req: Request, res: Response) => {
    res.send("Test query: " + await queryTest())
});

module.exports = router;