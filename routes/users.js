const express = require("express");

const {
    carregarUsuarios,
    salvarUsuarios,
    gerarNovoId
} = require("../data/usersData");

const router = express.Router();

// GET /users - listar todos os usuários
router.get("/", (req, res) => {
    carregarUsuarios((erro, usuarios) => {
        if (erro) {
            return res.status(500).json({
                erro: "Não foi possível carregar os usuários."
            });
        }

        res.status(200).json(usuarios);
    });
});

// GET /users/:id - buscar usuário por ID
router.get("/:id", (req, res) => {
    carregarUsuarios((erro, usuarios) => {
        if (erro) {
            return res.status(500).json({
                erro: "Não foi possível carregar os usuários."
            });
        }

        const id = Number(req.params.id);
        const usuario = usuarios.find(user => user.id === id);

        if (!usuario) {
            return res.status(404).json({
                erro: "Usuário não encontrado."
            });
        }

        res.status(200).json(usuario);
    });
});

// POST /users - cadastrar novo usuário
router.post("/", (req, res) => {
    carregarUsuarios((erro, usuarios) => {
        if (erro) {
            return res.status(500).json({
                erro: "Não foi possível carregar os usuários."
            });
        }

        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({
                erro: "Nome e email são obrigatórios."
            });
        }

        const novoUsuario = {
            id: gerarNovoId(usuarios),
            nome,
            email
        };

        usuarios.push(novoUsuario);

        salvarUsuarios(usuarios, (erro) => {
            if (erro) {
                return res.status(500).json({
                    erro: "Não foi possível salvar o usuário."
                });
            }

            res.status(201).json(novoUsuario);
        });
    });
});

// PUT /users/:id - atualizar usuário
router.put("/:id", (req, res) => {
    carregarUsuarios((erro, usuarios) => {
        if (erro) {
            return res.status(500).json({
                erro: "Não foi possível carregar os usuários."
            });
        }

        const id = Number(req.params.id);
        const indice = usuarios.findIndex(user => user.id === id);

        if (indice === -1) {
            return res.status(404).json({
                erro: "Usuário não encontrado."
            });
        }

        const { nome, email } = req.body;

        if (!nome || !email) {
            return res.status(400).json({
                erro: "Nome e email são obrigatórios."
            });
        }

        usuarios[indice].nome = nome;
        usuarios[indice].email = email;

        salvarUsuarios(usuarios, (erro) => {
            if (erro) {
                return res.status(500).json({
                    erro: "Não foi possível atualizar o usuário."
                });
            }

            res.status(200).json(usuarios[indice]);
        });
    });
});

// DELETE /users/:id - remover usuário
router.delete("/:id", (req, res) => {
    carregarUsuarios((erro, usuarios) => {
        if (erro) {
            return res.status(500).json({
                erro: "Não foi possível carregar os usuários."
            });
        }

        const id = Number(req.params.id);
        const indice = usuarios.findIndex(user => user.id === id);

        if (indice === -1) {
            return res.status(404).json({
                erro: "Usuário não encontrado."
            });
        }

        usuarios.splice(indice, 1);

        salvarUsuarios(usuarios, (erro) => {
            if (erro) {
                return res.status(500).json({
                    erro: "Não foi possível remover o usuário."
                });
            }

            res.status(200).json({
                mensagem: "Usuário removido com sucesso."
            });
        });
    });
});

module.exports = router;