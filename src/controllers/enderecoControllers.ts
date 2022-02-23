import { Request, Response } from "express";
import { EnderecoModel } from "../models/endereco";
import Logger from "../../config/logger";

export async function createEndereco(req: Request, res: Response) {
    try {
        const data = req.body;
        const endereco = await EnderecoModel.create(data);
        
        return res.status(201).json(endereco);
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};