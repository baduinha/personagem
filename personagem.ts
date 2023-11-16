export class Personagem {
    constructor (
        protected _nome: string,
        protected _forca: number,
        protected _habilidadeMental: number,
        protected _poderDeAtaque: number,
        protected _esquiva: number,
        protected _resistencia: number,
        protected _vidaAtual: number,
        protected _vidaMaxima: number
    ) {}
    
    public atacar(personagem: Personagem): void {
    console.log("Comportamento desconhecido");
    }
    public contraAtacar(personagem: Personagem): void {
    console.log("Comportamento desconhecido");
    }
    public aprimorarHabilidadePrincipal(): void {
    console.log("Um comportamento desconhecido");
    }
    public regenerarVida(): void {
        console.log("Um comportamento desconhecido");
        }

}
