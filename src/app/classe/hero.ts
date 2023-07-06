import { Oppenent } from "./opponent";

export class Hero {
  id: number;
  life: number;
  power:number;
  attaqueSpeciale: number;
  name: string;
  picture: string;
  type: string;
  potion:number;

  constructor(id: number, name:string, power: number, life:number, attaqueSpeciale:number, picture: string, type: string) {
      this.name = name;
      this.power = power;
      this.life = life;
      this.attaqueSpeciale = attaqueSpeciale;
      this.picture = picture,
      this.type = type;
      this.id = id;
      this.potion = 2;
  }

  getId():number {
    return this.id
  }

  getName():string {
      return this.name
  }

  setName(name:string):void {
      this.name = name
  }

  getPower():number {
      return this.power
  }

  setPower(power:number) {
      this.power = power
  }

  getAttaqueSpeciale(): number {
    return this.attaqueSpeciale
  }

  getLife():number {
      return this.life
  }

  setLife(life:number) {
      this.life = life
  }

  soin(life:number) {
    this.life = life + 50
  }

  attack(opponent: Oppenent): void{
      let attaque = 0;
      if (opponent.type === "eau" && this.type === "plante") {
        attaque = this.attaqueSpeciale * 2;
      } else if (opponent.type === "feu" && this.type === "eau") {
        attaque = this.attaqueSpeciale * 2
      }else if (opponent.type === "plante" && this.type === "feu") {
        attaque = this.attaqueSpeciale * 2
      }else {
        attaque = this.attaqueSpeciale
      }
      opponent.life = opponent.life - (this.power + attaque) 
  }

  isAlive():boolean{
      return this.life > 0
  }
}