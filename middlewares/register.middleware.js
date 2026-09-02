import { body, ExpressValidator } from "express-validator";

export const registerValidator = [
    body('username').trim().isLength({min : 3}).withMessage("username is required"),
    body('email').isEmail().withMessage("proper email"),
    body('password').isStrongPassword().withMessage("Required strongpassword"),
]

export default ExpressValidator;