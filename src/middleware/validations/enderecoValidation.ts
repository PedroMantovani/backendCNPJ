import { body } from "express-validator";

export const enderecoValidation = () => {
    return [
        body("logradouro").isString().withMessage("Only string are accepted"),
        body("numero").isNumeric().withMessage("Only number are accepted"),
        body("complemento").isString().withMessage("Only string are accepted"),
        body("bairro").isString().withMessage("Only string are accepted"),
        body("cidade").isString().withMessage("Only string are accepted"),
        body("estado").isString().withMessage("Only string are accepted"),
        body("cep").isString().withMessage("Only number inside string are accepted"),
    ];
};
