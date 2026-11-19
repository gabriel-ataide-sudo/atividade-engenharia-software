import {test, expect} from 'vitest';
import { aprovado } from './aprovado'

test('Aluno deve aprovar', () => {
    expect(aprovado(7,7,7)).toBe(true);
})

test('Aluno reprovar', () => {
    expect(aprovado(6,6,6)).toBe(false);
})