const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

// Open chat
chatToggle.addEventListener("click", () => {
  chatBox.style.display = "flex";
});

// Close chat
closeChat.addEventListener("click", () => {
  chatBox.style.display = "none";
});

// Send message
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  let text = userInput.value.trim();
  if (text === "") return;

  // Add user message
  let userMsg = document.createElement("div");
  userMsg.classList.add("user-msg");
  userMsg.innerText = text;
  chatBody.appendChild(userMsg);

  userInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  // Bot response
  setTimeout(() => {
    let botMsg = document.createElement("div");
    botMsg.classList.add("bot-msg");
    botMsg.innerText = sneakerBot(text);
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

/* Sneaker Bot Logic */
function sneakerBot(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("size")) return "Most sneakers fit true to size. What brand are you looking at?";
  if (msg.includes("nike")) return "Nike tends to run a bit snug — consider half a size up!";
  if (msg.includes("adidas")) return "Adidas generally fits true-to-size and comfy.";
  if (msg.includes("jordan")) return "Ahh the classics! Jordans fit true-to-size for most people.";
  if (msg.includes("release")) return "New drops usually happen on Saturdays. Want a release calendar?";
  if (msg.includes("recommend"))
    return "If you like comfort, go for Adidas Ultraboost. For style, Air Jordan 1 never fails.";

  return "I’m here for all things sneakers! Hit me with another question 👟";
}
