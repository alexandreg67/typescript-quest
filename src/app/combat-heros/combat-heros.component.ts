import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HEROSPARAM } from '../classe/mock-heros';
import { Hero } from '../classe/hero';
import { Oppenent } from '../classe/opponent';
import { OPPENENTS } from '../classe/mock-opponent';
import { gsap } from 'gsap';

@Component({
  selector: 'app-combat-heros',
  templateUrl: './combat-heros.component.html',
  styleUrls: ['./combat-heros.component.css']
})
export class CombatHerosComponent implements OnInit, AfterViewInit{

  @ViewChild('imgHeroPicture') imgHeroPicture: ElementRef;
  @ViewChild('imgOppenentPicture') imgOppenentPicture: ElementRef;

  imgOppenent: HTMLElement;
  imgHero: HTMLElement
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

  constructor(private route: ActivatedRoute, private router: Router, private renderer: Renderer2) {
  }

  ngOnInit(): void {
  
    this.vieMaxHero = this.hero?.life;
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

  ngAfterViewInit(): void {
    console.log("viewChild", this.imgHeroPicture);
    console.log("viewChild", this.imgOppenentPicture);
  }

  goToFight(hero: Hero, opponent: Oppenent) {
    if (opponent != undefined) {
      this.oppenentAttaque(hero, opponent) 
      this.heroAttaque(hero, opponent)
    }
    if (!hero.isAlive() && !opponent.isAlive()) {
        this.router.navigate(['draw'])
    }else if (!hero.isAlive()){
        this.router.navigate(['vainqueur-mechant', opponent.id])
    }else if (!opponent.isAlive()) {
        this.router.navigate(['vainqueur', hero.id])
    }    
    this.updateProgressWidthHero()  
  }

  getLife(hero: Hero) {
  if (hero.potion > 0 && hero.life < this.vieMaxHero ) { 
    hero.potion --
    hero.soin(hero.life);
    gsap.fromTo(
    this.imgHeroPicture.nativeElement,
    { rotationX: 0, rotationY: 0 },
    { rotationX: 50, rotationY: -360, yoyo:true, repeat:1 },
    );
    this.updateProgressWidthHero();
    }
    if (hero.life > this.vieMaxHero) {
      hero.life = this.vieMaxHero
    }
    if (hero.potion <= 0) {
      hero.potion = 0
    }
  }

  oppenentAttaque(hero:Hero, oppenent: Oppenent) {
    oppenent.attack(hero); 
    gsap.fromTo(
    this.imgOppenentPicture.nativeElement,
    { rotationX: 0, rotationY: 0 },
    { rotationX: 20, rotationY: 20, translateX: -50, yoyo: true, repeat: 1 }
    );
  }

  heroAttaque(hero: Hero, oppenent: Oppenent) {
      hero.attack(oppenent);
      gsap.fromTo(
      this.imgHeroPicture.nativeElement,
      { rotationX: 0, rotationY: 0 },
      { rotationX: -20, rotationY: 20, translateX: 50, yoyo: true, repeat: 1 }
      );
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
