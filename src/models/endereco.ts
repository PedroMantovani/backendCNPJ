import { model, Schema } from "mongoose";

const EnderecoSchema = new Schema(
    {
        logradouro: {type: String},
        numero: {type: String},
        complemento: {type: String},
        bairro: {type: String},
        cidade: {type: String},
        estado: {type: String},
        cep: {type: String},
        latitude: {type: String},
        longitude: {type: String}
    },
    {
        timestamps: true
    }
)

export const EnderecoModel = model("endereco", EnderecoSchema)