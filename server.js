// server.js

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // JSON body parse karne ke liye

// Mood ke hisaab se suggestion bhejna
app.post("/api/suggestion", (req, res) => {
  const { mood } = req.body;
  let suggestion = "";

  switch ((mood || "").toLowerCase()) {
    case "happy":
      suggestion = "Keep smiling! Spread positivity around you 😊";
      break;
    case "sad":
      suggestion = "It's okay to feel sad. Try talking to a friend 💙";
      break;
    case "angry":
      suggestion = "Take a deep breath and try listening to calm music 🎶";
      break;
    case "anxious":
      suggestion = "Relax, breathe slowly, and remind yourself that you are safe 🌸";
    break;

  case "excited":
    suggestion = "Enjoy the moment, share your happiness with others 🎉";
  break;
  case "lonely":
    suggestion = "Call a friend or spend time with family. You are not alone 🤗";
  break;
  case "tired":
    suggestion = "Take some rest, your body and mind need energy 💤";
  break;
  case "stressed":
    suggestion = "Try meditation or go for a short walk to refresh 🌿";
  break;

  default:
    suggestion = "Stay strong! Better days are coming ✨";
  }

  res.json({ suggestion });
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
