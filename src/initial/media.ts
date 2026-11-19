export function media(a: number, b: number): number {
    return (a + b) / 2;
}

export function verificaSituacao(a: number,b: number): string {
    if (media(a,b) >= 7) {
        return "APROVADO";
    }
    return "REPROVADO";
}
