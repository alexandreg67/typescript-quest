import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROSPARAM } from '../classe/mock-heros';
import { Hero } from '../classe/hero';
import { Oppenent } from '../classe/opponent';
import { OPPENENTS } from '../classe/mock-opponent';

@Component({
  selector: 'app-combat-heros',
  templateUrl: './combat-heros.component.html',
  styleUrls: ['./combat-heros.component.css']
})
export class CombatHerosComponent implements OnInit{

  herosListe: any;
  heroParam: any;
  hero: Hero;
  oppenentListe : Oppenent[];
  oppenent: Oppenent;
  oppenentType: string;
  progressWidthHero: number;
  vieMaxHero:number;
  progressWidthOppenent: number;
  vieMaxOppenent: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.vieMaxHero = this.hero?.life
  }

  ngOnInit(): void {
   
    this.herosListe = HEROSPARAM;
    this.oppenentListe = OPPENENTS;

    const heroId: string | null = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.heroParam = this.herosListe.find((hero: { id: number; }) => hero.id == +heroId);
      this.hero = new Hero(this.heroParam.id, this.heroParam.name, this.heroParam.power, this.heroParam.life, this.heroParam.attaqueSpeciale, this.heroParam.picture, this.heroParam.type);
      this.vieMaxHero = this.hero.life;
    } 

    let rand: number = Math.floor(Math.random() * 3);
    let type: string[] = ["feu", "eau", "plante"];
    let oppenentRandType = type[rand];

    let randOppenent: number = Math.floor(Math.random() * 2);
    let oppenentRand = this.oppenentListe[randOppenent]; 

    console.log("oppenentRandType ", oppenentRandType);
    
    
    this.oppenent = new Oppenent(oppenentRand.id, oppenentRand.name, oppenentRand.power, oppenentRand.life, oppenentRand.attaqueSpeciale, oppenentRand.picture, oppenentRandType) 
    this.vieMaxOppenent = this.oppenent.life;
    this.updateProgressWidthHero()

  }

  // goToHerosListe() {
  //   this.router.navigate(['/list-heros']);
  // }

  goToFight(hero: Hero, opponent: Oppenent) {
    if (opponent != undefined) {
      hero.attack(opponent);
      opponent.attack(hero);
    }
    console.log(hero);

    if (!hero.isAlive() && !opponent.isAlive()) {
        this.router.navigate(['draw'])
        console.log("It's a Draw");

    }else if (!hero.isAlive()){
        this.router.navigate(['vainqueur-mechant', opponent.id])
        console.log(`${opponent.name} wins`);
    }else if (!opponent.isAlive()) {
        this.router.navigate(['vainqueur', hero.id])
        console.log(`${hero.name} wins`);
    }    
    this.updateProgressWidthHero()
  }

  updateProgressWidthHero() {

    if (this.hero?.life && this.vieMaxHero) {
      this.progressWidthHero = 100 / this.vieMaxHero * this.hero.life
    }
    if (this.oppenent?.life && this.vieMaxOppenent) {
      this.progressWidthOppenent = 100 / this.vieMaxOppenent * this.oppenent.life
    }
  }
}
