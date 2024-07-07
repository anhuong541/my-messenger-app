import { createServer } from "http";
import e, { Request, Response } from "express";
import { Server } from "socket.io";
import cors from "cors";

const app = e(); // run express
const port = 3000;

app.use(e.static("public"));
//CORS
app.use(
  cors({
    origin: ["http://localhost:5173/", "http://localhost:3000/"],
    optionsSuccessStatus: 200,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// socket.io
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Adjust the origin to match your Svelte app's URL and port
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("the code is running!!!");

  // When a message is received, broadcast it to all clients
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
    console.log("listen to message: ", msg);
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Start the server
httpServer.listen(port, () => {
  console.log(`Server is running port ${port}`);
});
