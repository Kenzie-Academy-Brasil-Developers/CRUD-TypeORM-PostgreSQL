import { Request, Response } from "express";
import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  try {
    const deleted = await deleteUserService(user_id);

    return res.status(204).json({ message: "User deleted with sucess!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default deleteUserController;
