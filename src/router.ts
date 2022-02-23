import { Router } from "express";
import { allCNPJ, createCNPJ, deleteCNPJ, findCNPJByCNPJ, updateCNPJ } from "./controllers/CNPJControllers";
import { createEndereco } from "./controllers/enderecoControllers";
import { cnpjCreateValidation } from "./middleware/cnpjValidation";
import { validate } from "./middleware/handeValidation";

const router = Router();

export default router
// CNPJ
.post("/cnpj", cnpjCreateValidation(), validate, createCNPJ)
.get("/cnpj/:cnpj", findCNPJByCNPJ) // make validation
.get("/cnpj", allCNPJ) // make validation
.patch("/cnpj/:cnpj", cnpjCreateValidation(), validate, updateCNPJ)
.delete("/cnpj/:cnpj", deleteCNPJ) // make validation
// Endereço
.post("/endereco", createEndereco);