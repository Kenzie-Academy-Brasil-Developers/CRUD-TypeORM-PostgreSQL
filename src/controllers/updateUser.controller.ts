import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";

const updateUserController = async (req: Request, res: Response) => {
  try {
    const userUpdate: IUserUpdate = req.body;
    const id: string = req.params.id;

    const updateUser = await updateUserService(userUpdate, id);

    return res.status(200).json({ message: "Data updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(401).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default updateUserController;
