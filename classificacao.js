function verificarIdade(idade) {
    if (idade >= 18) {
        return "Acesso permitido";
    }
    return "Acesso negado";
}
module.exports = verificarIdade;