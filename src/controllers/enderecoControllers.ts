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
        return res.status(500).json({
            error: "We are currently experiencing instability, please try again later.",
        });
    }
}

export async function findEnredecoById(req: Request, res: Response) {
    try {
        const _id = req.params.endereco;
        const enderecoFound = await EnderecoModel.findOne({
            cnpjId: _id,
        }).populate("cnpjId");

        if (!enderecoFound) {
            return res.status(404).json({ error: "Adress not found." });
        }
        return res.status(200).json(enderecoFound);
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({
            error: "We are currently experiencing instability, please try again later.",
        });
    }
}

export async function updateEndereco(req: Request, res: Response) {
    try {
        const endereco = req.params.endereco;
        const data = req.body;

        const enderecoFound = await EnderecoModel.find({ _id: endereco });

        if (!enderecoFound) {
            return res.status(404).json({ error: "Adress not found." });
        }

        const newData = await EnderecoModel.updateOne({ _id: endereco }, data);

        if (newData.acknowledged) {
            return res.status(200).json("Changed data.");
        } else {
            return res.status(500).json({ error: "Problem updating data." });
        }
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({
            error: "We are currently experiencing instability, please try again later.",
        });
    }
}

export async function deleteEndereco(req: Request, res: Response) {
    try {
        const endereco = req.params.endereco;
        const enderecoRemoved = await EnderecoModel.deleteOne({
            _id: endereco,
        });

        if (enderecoRemoved) {
            return res.status(200).json({ message: "Deleted." });
        }

        return res.status(404).json({ error: "Error to delete." });
    } catch (e: any) {
        Logger.error(e.message);
        return res.status(500).json({
            error: "We are currently experiencing instability, please try again later.",
        });
    }
}
