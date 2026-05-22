const verificarIdade = require('./classificacao');

test('Deve permitir o acesso para idade igual a 18', () => {
    expect(verificarIdade(18)).toBe("Acesso permitido");
});

test('Deve negar o acesso para idade menor que 18', () => {
    expect(verificarIdade(17)).toBe("Acesso negado");
});