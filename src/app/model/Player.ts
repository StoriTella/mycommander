export class Player {
    name: string;
    deck: string;
    life: number;
    poison: number;
  
    constructor(name: string, deck: string, life: number, poison: number) {
      this.name = name;
      this.deck = deck;
      this.life = life;
      this.poison = poison;
    }
  }