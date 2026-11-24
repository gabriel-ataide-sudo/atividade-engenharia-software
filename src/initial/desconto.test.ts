import {test, expect} from 'vitest';
import { descontar } from './desconto'

test('50 não deve ser descontado', () => {
    expect(descontar(50)).toBe(50);
})

test('100 deve descontado para 90', () => {
    expect(descontar(100)).toBe(90);
})

test('150 deve descontado para 135', () => {
    expect(descontar(150)).toBe(135);
})

test('200 deve descontado para 160', () => {
    expect(descontar(200)).toBe(160);
})

test('250 deve descontado para 200', () => {
    expect(descontar(250)).toBe(200);
})