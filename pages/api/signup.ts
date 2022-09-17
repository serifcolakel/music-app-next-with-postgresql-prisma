// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const salt = bcrypt.genSaltSync();
  const { email, password } = req.body;
  let user;
  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    res.status(401).json({ message: "User already exists" });
    return;
  }
  const token: string = jwt.sign(
    { email: user.email, id: user.id, time: Date.now() },
    process.env.JWT_SECRET || "Serif",
    { expiresIn: "1d" }
  );
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("ACCESS_APP_TOKEN", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // check the link details -> https://community.cookiepro.com/s/article/UUID-e7d59043-be8d-e218-0724-305ec899c95f?language=en_US#:~:text=The%20SameSite%3DLax%20setting%20will,SameSite%3DNone
      maxAge: 60 * 60 * 24,
      path: "/",
    })
  );
  res.status(200).json({ message: "Success", user });

  //   if (req.method === "POST") {
  //     const { email, password } = req.body;
  //     const user = await prisma.user.findUnique({
  //       where: {
  //         email,
  //       },
  //     });
  //     if (!user) {
  //       res.status(401).json({ message: "User not found" });
  //       return;
  //     }
  //     const passwordValid = await bcrypt.compare(password, user.password);
  //     if (!passwordValid) {
  //       res.status(401).json({ message: "Password not valid" });
  //       return;
  //     }
  //     const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  //       expiresIn: "7d",
  //     });
  //     res.setHeader(
  //       "Set-Cookie",
  //       cookie.serialize("token", token, {
  //         httpOnly: true,
  //         secure: process.env.NODE_ENV !== "development",
  //         sameSite: "strict",
  //         maxAge: 604800,
  //         path: "/",
  //       })
  //     );
  //     res.status(200).json({ message: "Success" });
  //   } else {
  //     res.setHeader("Allow", ["POST"]);
  //     res.status(405).end(`Method ${req.method} Not Allowed`);
  //   }
}
