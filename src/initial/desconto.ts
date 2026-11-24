export function descontar(valor: number): number {
    if (valor < 100) {
        return valor
    } else if (valor >= 100 && valor < 200) {
        return valor * 0.90
    } else if (valor >= 200 && valor ) {
        return valor * 0.80
    }
    return valor;
}