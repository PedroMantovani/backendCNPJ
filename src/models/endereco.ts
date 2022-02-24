import mongoose from "mongoose";
import { model, Schema } from "mongoose";

const EnderecoSchema: Schema = new Schema(
    {
        logradouro: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String },
        bairro: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true },
        cep: { type: String, required: true },
        latitude: { type: String },
        longitude: { type: String },
        cnpjId: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: "cnpj",
        },
    },
    {
        timestamps: true,
    }
);

export const EnderecoModel = model("endereco", EnderecoSchema);
