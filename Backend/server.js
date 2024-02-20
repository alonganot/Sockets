const webSocket = require("ws");
const wss = new webSocket.Server({ port: 9000 });

wss.on("connection", (ws) => {
  console.log("connected to server!");
  ws.on("message", (data) => {
    const message = data.toString();
    wss.broadcast(message);
  });
});

wss.broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};
