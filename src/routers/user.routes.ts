import { Router } from "express";

const routes = Router();

import registerUserController from "../controllers/registerUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import loginUserController from "../controllers/loginUser.controller";

import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyisAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyIsAdmUpdateMiddleware from "../middlewares/verifyIsAdmUpdate.middleware";
import verifyOwnerMiddleware from "../middlewares/verifyIsOwner.middleware";
import verifyStatusMiddleware from "../middlewares/verifyStatus.middleware";

routes.post("/users", registerUserController);
routes.post("/login", loginUserController);
routes.get(
  "/users",
  verifyAuthMiddleware,
  verifyisAdmMiddleware,
  listUsersController
);
routes.patch(
  "/users/:id",
  verifyAuthMiddleware,
  verifyIsAdmUpdateMiddleware,
  updateUserController
);
routes.delete(
  "/users/:id",
  verifyAuthMiddleware,
  verifyisAdmMiddleware,
  verifyOwnerMiddleware,
  verifyStatusMiddleware,
  deleteUserController
);

export default routes;
