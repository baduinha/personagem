import { Personagem } from "./personagem";
import { Util } from "./util";

export class Guerreiro extends Personagem {
    constructor(nome: string) {
        super(
            nome + " Warrior",
            Util.randomizar(1,1000),
            0,
            0,
            Util.randomizar(0, 50),
            Util.randomizar(0 , 90),
            0,
            Util.randomizar(1, 40_000)
        );
        this._poderDeAtaque = this._forca * 10;
        this._vidaAtual = this._vidaMaxima;
    }
}