import {test, expect} from 'vitest';
import { soma, subtracao, multiplicacao, divisao } from './calculadora'

test('soma de 8 e 1 deve ser 9', () => {
    expect(soma(8,1)).toBe(9);
})

test('subtracao de 3 e 1 deve ser 2', () => {
    expect(subtracao(3,1)).toBe(2);
})

test('multiplicação de 4 e 4 deve ser 16', () => {
    expect(multiplicacao(4,4)).toBe(16);
})

test('divisão de 18 e 9 deve ser 2', () => {
    expect(divisao(18,9)).toBe(2);
})

test('divisão de 1 por 0 deve retornar erro', () => {
    // tirado daqui https://vitest.dev/api/expect#tothrow
    expect(() => divisao(1,0)).toThrow("Divisão por zero");
})