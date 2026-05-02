function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  if (!userText) return;

  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  // Bot reply (simple)
  const botMsg = document.createElement("div");
  botMsg.className = "bot";
  botMsg.innerText = "I'm analyzing your symptoms... 🩺";
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
