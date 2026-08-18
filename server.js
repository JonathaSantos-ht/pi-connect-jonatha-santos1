const express = require("express");
const usersRoutes = require("./routes/users");

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use("/users", usersRoutes);

// Rota inicial
app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API Connect funcionando!",
        status: "online"
    });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});