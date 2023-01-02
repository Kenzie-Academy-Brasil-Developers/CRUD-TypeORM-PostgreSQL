import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const verifyisAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdm) {
    return res.status(403).json({
      message: "Unauthorized",
    });
  }
  return next();
};

export default verifyisAdmMiddleware;
