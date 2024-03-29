import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginUserService from "../services/loginUser.service";

const loginUsercontroller = async (req: Request, res: Response) => {
  const loginData: IUserLogin = req.body;

  const token = await loginUserService(loginData);

  return res.json({ token });
};

export default loginUsercontroller;
