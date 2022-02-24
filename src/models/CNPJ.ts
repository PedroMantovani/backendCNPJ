import { model, Schema } from "mongoose";

const CNPJSchema: Schema = new Schema(
    {
        cnpj: { type: String, required: true },
        razao: { type: String, required: true },
        nome: { type: String, required: true },
        contato: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export const CNPJModel = model("cnpj", CNPJSchema);
