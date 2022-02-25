import { Router } from "express";
import { allCNPJ, createCNPJ, deleteCNPJ, findCNPJByCNPJ, updateCNPJ } from "./controllers/CNPJControllers";
import { createEndereco, deleteEndereco, findEnredecoById, updateEndereco } from "./controllers/enderecoControllers";
import { validate } from "./middleware/handeValidation";
import { cnpjValidation } from "./middleware/validations/cnpjValidation";
import { enderecoValidation } from "./middleware/validations/enderecoValidation";

const router = Router();

export default router
    // CNPJ
    .post("/cnpj", cnpjValidation(), validate, createCNPJ)
    .get("/cnpj/:cnpj", findCNPJByCNPJ)
    .get("/cnpj", allCNPJ)
    .patch("/cnpj/:cnpj", updateCNPJ)
    .delete("/cnpj/:cnpj", deleteCNPJ)
    // Adress
    .post("/endereco", enderecoValidation(), validate, createEndereco)
    .get("/endereco/:endereco", findEnredecoById)
    .patch("/endereco/:endereco", updateEndereco)
    .delete("/endereco/:endereco", deleteEndereco);
