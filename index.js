const express = require("express");
const fetch = require("node-fetch");
const app = express();

const REPL_URL = "https://TUO-BOT.replit.dev"; // <--- metti qui il tuo link .replit.dev

// rotta base
app.get("/", (req, res) => {
  res.send("KeepAlive attivo e sto pingando Replit!");
});

// funzione che pinga Replit ogni minuto
setInterval(() => {
  fetch(REPL_URL).then(res => {
    console.log(`Ping a ${REPL_URL} -> ${res.status}`);
  }).catch(err => console.error("Errore nel ping:", err));
}, 60 * 1000);

app.listen(3000, () => {
  console.log("Server KeepAlive partito su Render");
});
