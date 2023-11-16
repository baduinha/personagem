export class Util {
    public static randomizar(minimo: number, maximo:number){
    const ValorSorteado =
    minimo + Math.random() * (maximo - minimo);
    const ValorInteiro = Math.round(ValorSorteado);
    return ValorInteiro
}

}