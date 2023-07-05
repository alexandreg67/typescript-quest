import { Hero } from "./hero";

export class Oppenent {
  id: number;
  life: number;
  power: number;
  attaqueSpeciale: number;
  name: string;
  picture: string;
  type: string;

  constructor(id: number,name:string, power: number, life:number, attaqueSpeciale:number, picture: string, type: string) {
      this.name = name;
      this.power = power;
      this.life = life;
      this.attaqueSpeciale = attaqueSpeciale;
      this.picture = picture,
      this.type = type;
      this.id = id
  }


  attack(hero: Hero): void{
    let attaque = 0
    if (hero.type === "feu" && this.type === "eau") {
      attaque =  this.attaqueSpeciale * 2
    }else if (hero.type === "plante" && this.type === "feu") {
      attaque = this.attaqueSpeciale * 2
    }else if (hero.type === "eau" && this.type === "plante") {
      attaque = this.attaqueSpeciale * 2 
    }else {
      attaque = this.attaqueSpeciale
    }
    hero.life = hero.life - (this.power + attaque)   
  }

  isAlive():boolean{
      return this.life > 0
  }
}