import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app.get("/create", async (request: Request, response: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: 'elsa@prisma.io',
        name: 'Elsa Prisma',
      },
    });

    console.log(user);
    return response.status(200).send("ciao");
  } catch (error) {
    console.error(error);
    return response.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
  console.log(error)
});