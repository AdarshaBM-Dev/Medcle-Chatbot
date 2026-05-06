const chatBox = document.getElementById('chat-box');

// Simple response logic (You can expand this later with your CSV data)
const responses = {
    "hello": "Hello! I am Healtho AI. How can I help you today?",
    "fever": "For a fever, rest and stay hydrated. If it's high, please see a doctor.",
    "headache": "Headaches can be caused by stress or dehydration. Try resting in a dark room.",   
    "default": "I'm not sure about that. Please consult a medical professional for specific advice."
};

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.toLowerCase();
    
    if (message.trim() === "") return;

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
    
    // Simple matching logic
    let botResponse = responses["default"];
    for (let key in responses) {
        if (message.includes(key)) {
            botResponse = responses[key];
        }
    }

    // Display bot response
    setTimeout(() => {
        chatBox.innerHTML += `<p><strong>Healtho:</strong> ${botResponse}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}
