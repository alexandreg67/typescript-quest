import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Hero } from '../../app/classe/hero';
import { HEROSPARAM } from '../../app/classe/mock-heros';
import { ActivatedRoute, Router } from '@angular/router';
import { OPPENENTS } from '../../app/classe/mock-opponent';
import { gsap } from 'gsap';

@Component({
  selector: 'app-vainqueur',
  templateUrl: './vainqueur.component.html',
  styleUrls: ['./vainqueur.component.css']
})

export class VainqueurComponent implements OnInit{

  @ViewChild('cardVictory') imgHeroPicture: ElementRef;

  herosListe: any;
  hero: Hero;
  heroParam:any;
  oppenentListe:any;

  constructor(private route: ActivatedRoute, private router: Router, private render: Renderer2) {
    
  }

  ngOnInit(): void {

    this.herosListe = HEROSPARAM;
    this.oppenentListe = OPPENENTS;

    const heroId: string | null = this.route.snapshot.paramMap.get('id');
    if (heroId) {      
      this.heroParam = this.herosListe.find((hero: { id: number; }) => hero.id == +heroId);
      this.hero = new Hero(this.heroParam.id, this.heroParam.name, this.heroParam.power, this.heroParam.life, this.heroParam.attaqueSpeciale, this.heroParam.picture, this.heroParam.type);

    }else {
      this.router.navigate([''])
    }
  }

  ngAfterViewInit():void {
    console.log(this.imgHeroPicture);
    gsap.fromTo(
    this.imgHeroPicture.nativeElement,
    { rotationX: 0, rotationY: 0 },
    { rotationX: 0, rotationY: -360, yoyo:true, repeat:3 },
    );
  }

  goBack(): void {
    this.router.navigate([''])
  }
}
