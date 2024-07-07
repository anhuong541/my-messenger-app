import e, { Request, Response } from "express";

const app = e(); // run express
const port = 4000;

// route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// listen
app.listen(port, () => {
  console.log(`Server start on port ${port}`);
});
