import { Hero } from "./hero";
import { Oppenent } from "./opponent";

export const OPPENENTS = [
    {
        id: 1,
        name: "Louis",
        life: 200,
        power: 15,
        attaqueSpeciale: 10,
        picture: "../assets/squelette_epee.jpg",
        type: "",
        attack(hero: Hero): void{
            hero.life = hero.life - this.power   
        },
        isAlive():boolean{
            return this.life > 0
        }
    },
    {
        id: 2,
        name: "Jeremy",
        life: 200,
        power: 15,
        attaqueSpeciale: 10,
        picture: "../assets/squelette_hache.jpg",
        type: "",
        attack(hero: Hero): void{
            hero.life = hero.life - this.power   
        },
        isAlive():boolean{
            return this.life > 0
        }
    }
]