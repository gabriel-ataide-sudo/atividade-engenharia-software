import {test, expect} from 'vitest';
import { media } from './media'

test('Media de 2+2 deve dar 2', () => {
    expect(media(2,2)).toBe(2)
})

test('Media de 9+1 deve dar 5', () => {
    expect(media(9,1)).toBe(5)
})