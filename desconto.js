function calcularDesconto(valor) {
    // Se o valor for maior ou IGUAL a 100
    if (valor >= 100) {
        return valor * 0.9; // Aplica 10% de desconto
    }
    return valor; // Senão, retorna o valor normal
}

module.exports = calcularDesconto;