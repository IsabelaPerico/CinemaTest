const calcularDesconto = require('./desconto');

test('Deve aplicar 10% de desconto para compras de exatamente R$ 100', () => {
    expect(calcularDesconto(100)).toBe(90);
});