import { Component, OnInit } from '@angular/core';
import { Hero } from '../../app/classe/hero';
import { HEROSPARAM } from '../../app/classe/mock-heros';
import { ActivatedRoute, Router } from '@angular/router';
import { OPPENENTS } from '../../app/classe/mock-opponent';

@Component({
  selector: 'app-vainqueur',
  templateUrl: './vainqueur.component.html',
  styleUrls: ['./vainqueur.component.css']
})

export class VainqueurComponent implements OnInit{
  herosListe:any;
  hero:Hero | undefined;
  heroParam:any;
  oppenentListe:any;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {

    this.herosListe = HEROSPARAM;
    this.oppenentListe = OPPENENTS;

    const heroId: string | null = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      console.log(heroId);
      
      this.heroParam = this.herosListe.find((hero: { id: number; }) => hero.id == +heroId);
      this.hero = new Hero(this.heroParam.id, this.heroParam.name, this.heroParam.power, this.heroParam.life, this.heroParam.attaqueSpeciale, this.heroParam.picture, this.heroParam.type);

    }else {
      this.router.navigate([''])
    }
  }

  goBack(): void {
    this.router.navigate([''])
  }
}
