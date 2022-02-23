import { model, Schema } from "mongoose";

const CNPJSchema = new Schema(
    {
        cnpj: {type: Number},
        razao: {type: String},
        nome: {type: String},
        contato: {type: Number}
    },
    {
        timestamps: true
    }
)

export const CNPJModel = model("cnpj", CNPJSchema)