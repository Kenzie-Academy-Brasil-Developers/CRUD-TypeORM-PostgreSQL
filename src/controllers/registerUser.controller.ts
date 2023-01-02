import { Request, Response } from "express";
import registerUserService from "../services/registerUser.service";

const registerUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdm, createdAt, updatedAt } = req.body;

    const newUser = await registerUserService({
      name,
      email,
      password,
      isAdm,
    });

    return res.status(201).send(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default registerUserController;
