export function soma(a: number, b: number): number {
    let res = a + b;
    return res;
}

export function subtracao(a: number, b: number): number {
    let res = a - b;
    return res;
}

export function multiplicacao(a: number, b: number): number {
    let res = a * b;
    return res;
}

export function divisao(a: number, b: number): number {
    if (b == 0) {
        throw new Error('Divisão por zero')
    }
    let res = a / b;
    return res;
}