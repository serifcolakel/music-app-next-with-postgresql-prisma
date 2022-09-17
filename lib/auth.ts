import jwt from "jsonwebtoken";
import prisma from "./prisma";
import { NextApiRequest, NextApiResponse } from "next";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.ACCESS_APP_TOKEN;
    if (!token) {
      let user;
      try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET || "Serif");
        user = await prisma.user.findUnique({
          where: {
            id,
          },
        });
        if (!user) {
          throw new Error("Not Real User");
        }
      } catch (error) {
        res.status(401).json({ message: "Not Authorized" });
        return;
      }
      return handler(req, res, user);
    }
    res.status(401).json({ message: "Not Authorized" });
  };
};
