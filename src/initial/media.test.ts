import {test, expect} from 'vitest';
import { media, verificaSituacao } from './media'

test('Media de 2+2 deve dar 2', () => {
    expect(media(2,2)).toBe(2)
})

test('Media de 9+1 deve dar 5', () => {
    expect(media(9,1)).toBe(5)
})

test('Situação de nota 3 e 2 deve ser reprovado', () => {
    expect(verificaSituacao(3,2)).toBe("REPROVADO")
})

test('Situação de nota 7 e 7 deve ser aprovado', () => {
    expect(verificaSituacao(7,7)).toBe("APROVADO")
})

test('Situação de nota 6 e 7 deve ser reprovado', () => {
    expect(verificaSituacao(6,7)).toBe("REPROVADO")
})

test('Situação de nota 10 e 10 deve ser aprovado', () => {
    expect(verificaSituacao(10,10)).toBe("APROVADO")
})