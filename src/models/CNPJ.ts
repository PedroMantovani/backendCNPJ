import { model, Schema } from "mongoose";

const CNPJSchema = new Schema(
    {
        cnpj: { type: Number },
        razao: { type: String },
        nome: { type: String },
        contato: { type: Number },
        enderecoId: { type: String }
    },
    {
        timestamps: true
    }
)

export const CNPJModel = model("cnpj", CNPJSchema)