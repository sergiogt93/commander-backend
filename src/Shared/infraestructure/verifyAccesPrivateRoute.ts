import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "./TokenManager";

export function verifyAccesPrivateRoute(req: Request, res: Response, next: NextFunction) {
  try {
    const token: string = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "token missing" });
    }

    const decoded: string | JwtPayload = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ error: "token invalid" });
    }

    next();
  } catch (error) {
    next(error);
  }
}
