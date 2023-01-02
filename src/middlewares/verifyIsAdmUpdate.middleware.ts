import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyIsAdmUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(401).json({
      message: "User is not admin",
    });
  }
  return next();
};

export default verifyIsAdmUpdateMiddleware;
