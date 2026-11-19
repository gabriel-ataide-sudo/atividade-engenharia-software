import {test, expect} from 'vitest';
import { aprovado } from './aprovado'

test('Aluno aprovado', () => {
    expect(aprovado(7,7, 7)).toBe(true);
})