import { body } from "express-validator";

export const cnpjCreateValidation = () => {
    return [
        body("cnpj")
            .isNumeric()
            .withMessage("Only numbers are accepted")
            .isLength({ min: 14, max: 14 })
            .withMessage("CNPJ invalid, contains less/more than 14 numbers"),
        body("razao")
            .isString()
            .withMessage("Only string are accepted"),
        body("nome")
            .isString()
            .withMessage("Only string are accepted"),
        body("contato")
            .isNumeric()
            .withMessage("Only numbers are accepted")
            .isLength({ min: 11, max: 11 })
            .withMessage("Contato invalid, contains less/more than 11 numbers"),
    ];
};