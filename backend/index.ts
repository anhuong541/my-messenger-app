import e, { Request, Response } from "express";
import cors from "cors";

const Ably = require("ably");

const app = e(); // run express
const port = 3000;

app.use(e.static("public"));
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

// Connect to Ably with your API key
const ably = new Ably.Realtime(
  "u1o7fg.leWzKQ:LSN-s392sA8ra9fQrn103SxKDmIyv8G01RFjkM4SRO0"
);
ably.connection("connected", () => {
  console.log("Connected to Ably!");
});

const channel = ably.channels.get("get-started");
channel.subscribe("first", (message: any) => {
  console.log("Message received: " + message.data);
});

channel.publish("first", "Here is my first message!");
