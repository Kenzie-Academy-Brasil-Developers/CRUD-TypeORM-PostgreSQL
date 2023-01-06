import { Request, Response } from "express";
import updateUserService from "../services/updateUser.service";
import { IUserUpdate } from "../interfaces/users";

const updateUsercontroller = async (req: Request, res: Response) => {
  const userData: IUserUpdate = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return res.status(200).json(updatedUser);
};

export default updateUsercontroller;
