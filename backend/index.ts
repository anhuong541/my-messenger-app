import e, { Request, Response } from "express";
import cors from "cors";

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

const Ably = require("ably");

async function publishSubscribe() {
  // Connect to Ably with your API key
  const ably = new Ably.Realtime(
    "u1o7fg.leWzKQ:LSN-s392sA8ra9fQrn103SxKDmIyv8G01RFjkM4SRO0"
  );
  ably.connection.once("connected", () => {
    console.log("Connected to Ably!");
  });

  // Create a channel called 'get-started' and register a listener to subscribe to all messages with the name 'first'
  const channel = ably.channels.get("get-started");
  await channel.subscribe("first", (message: any) => {
    console.log("Message received: " + message.data);
  });

  // Publish a message with the name 'first' and the contents 'Here is my first message!'
  await channel.publish("first", "Here is my first message!");

  // Close the connection to Ably after a 5 second delay
  setTimeout(async () => {
    ably.connection.close();
    await ably.connection.once("closed", function () {
      console.log("Closed the connection to Ably.");
    });
  }, 5000);
}

publishSubscribe();
