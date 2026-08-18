const fs = require("fs");

const caminho = "./data/users.json";

function carregarUsuarios(callback) {
    fs.readFile(caminho, "utf8", (erro, dados) => {
        if (erro) {
            return callback(erro);
        }

        const usuarios = JSON.parse(dados);
        callback(null, usuarios);
    });
}

function salvarUsuarios(usuarios, callback) {
    fs.writeFile(
        caminho,
        JSON.stringify(usuarios, null, 2),
        (erro) => {
            if (erro) {
                return callback(erro);
            }

            callback(null);
        }
    );
}

function gerarNovoId(usuarios) {
    if (usuarios.length === 0) {
        return 1;
    }

    return usuarios[usuarios.length - 1].id + 1;
}

module.exports = {
    carregarUsuarios,
    salvarUsuarios,
    gerarNovoId
};