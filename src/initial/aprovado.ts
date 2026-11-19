export function aprovado(av1: number, av2: number, av3: number): boolean {
    let m1 = (av1 + av2) / 2;
    let m2 = (m1 + av3) / 2;
    return m2 >= 7;
}