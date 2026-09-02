import { Router } from "express";
import { register, getAlluser, deleteuser, updateuser} from "../controllers/user.controller.js";
import { registerValidator } from "../middlewares/register.middleware.js";

const UserRouter = Router();

UserRouter.post("/",registerValidator, register);
UserRouter.get("/", getAlluser);
UserRouter.delete("/:id", deleteuser);
UserRouter.patch('/', updateuser);

export default UserRouter;
