export function aprovado(av1: number, av2: number, av3: number): boolean {
    let media = (((av1 + av2) / 2) + av3) / 2;
    return media >= 7;
}