import express, { Request, Response } from "express";

const app = express();

const port = 4000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("<h1>teste<h1>");

  return;
});

app.listen(port, () => {
  console.log(`Server up and running on: http://localhost:${port}`);
});
