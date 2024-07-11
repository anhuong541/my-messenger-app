import e, { Request, Response } from "express";
import cors from "cors";

const app = e(); // run express
const port = 3000;

// app.use(e.static("public"));
//CORS
app.use(
  cors({
    origin: ["http://localhost:5173/", "http://localhost:3000/"],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  console.log("it run");

  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
