export function valor_frete(preco: number): number {
    if (preco >= 100 && preco < 200) {
        return 10
    } else if (preco >= 200) {
        return 0
    }
    return 20
}