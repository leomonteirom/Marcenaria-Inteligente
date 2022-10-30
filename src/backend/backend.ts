// Aqui vai a configuração do express, como por exemplo a porta, host e cors
import express from "express";
import router from "./routes";
const app = express();
const port = 3000;
const host = "localhost";

// Usar as rotas
app.use(express.json());
app.use(router);

app.listen(port, host, () => {
  console.log("Online");
});
