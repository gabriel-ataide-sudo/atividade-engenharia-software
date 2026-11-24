import {test, expect} from 'vitest';
import { valor_frete } from './frete'

test('50 ter frete de 20', () => {
    expect(valor_frete(50)).toBe(20);
})

test('99.99 ter frete de 20', () => {
    expect(valor_frete(99.99)).toBe(20);
})

test('100 ter frete de 10', () => {
    expect(valor_frete(100)).toBe(10);
})

test('199.99 ter frete de 20', () => {
    expect(valor_frete(199.99)).toBe(20);
})

test('200 ter frete grátis', () => {
    expect(valor_frete(200)).toBe(0);
})