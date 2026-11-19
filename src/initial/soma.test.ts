import {test, expect} from 'vitest';
import { soma } from './soma'

test('soma', () => {
    expect(soma(8,1)).toBe(9);
})