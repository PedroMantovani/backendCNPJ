import { Request, Response } from "express";
import { CNPJModel } from "../models/CNPJ";
import Logger from "../../config/logger";


export async function createCNPJ(req: Request, res: Response) {
    try {
        const data = req.body;
        const cnpj = await CNPJModel.create(data);

        return res.status(201).json(cnpj);
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};

export async function findCNPJByCNPJ(req: Request, res: Response) {
    try {
        const cnpj = req.params.cnpj;
        const cnpjFound = await CNPJModel.findOne({ cnpj: cnpj });

        if(!cnpjFound){
            return res.status(404).json({ error: "CNPJ not found" });
        };
        return res.status(200).json(cnpjFound);
    } catch (e: any) {
        Logger.error(e.message)
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};

export async function allCNPJ(req: Request, res: Response) {
    try {
        const allCNPJ = await CNPJModel.find();

        if(!allCNPJ){
            return res.status(404).json({ error: "No CNPJ not found" });
        };
        return res.status(200).json(allCNPJ);
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};

export async function deleteCNPJ(req: Request, res: Response) {
    try {
        const cnpj = req.params.cnpj;
        const cnpjRemoved = await CNPJModel.findOneAndDelete({ cnpj: cnpj })

        if(!cnpjRemoved){
            return res.status(404).json({ error: "Error to delete" })
        };

        return res.status(200).json({ message: "deleted" })
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};

export async function updateCNPJ(req: Request, res: Response) { 
    try {
        const cnpj = req.params.cnpj;
        const data = req.body;

        const cnpjFound = await CNPJModel.find({ cnpj: cnpj});

        if(!cnpjFound){
            return res.status(404).json({ error: "No CNPJ not found" });
        };

        await CNPJModel.updateOne({ cnpj: cnpj }, data);

        return res.status(200).json(data);
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({ error: "We are currently experiencing instability, please try again later." });
    };
};