
const test = require('node:test');
const assert = require('node:assert/strict');
const { total } = require('./app');

test('Calcula correctamente una compra sin descuento', () => {
    assert.equal(total(100, 2, 0), 200);
});

test('Aplica correctamente un descuento del 50%', () => {
    assert.equal(total(100, 2, 0.5), 150);
});

test('Calcula correctamente una compra con descuento del 20%', () => {
    assert.equal(total(500, 2, 0.2), 800);
});
