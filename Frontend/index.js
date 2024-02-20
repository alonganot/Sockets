const ws = new WebSocket("ws://10.0.0.41:9000");

ws.addEventListener("open", () => {
  console.log("connected!");
});

document.getElementById("sendMessageButton").addEventListener("click", () => {
    const username = document.getElementById('username').value;
    const message = document.getElementById("userMessage").value;
    ws.send(`${username}: ${message}`);
    document.getElementById("userMessage").value = "";
    
});

ws.addEventListener("message", ({ data }) => {
    console.log(data);
    const messageDiv = document.createElement("h1");
    messageDiv.innerText = data;
    document.getElementById("chatMessages").appendChild(messageDiv);
})
