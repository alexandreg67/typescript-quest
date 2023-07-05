import { Component, OnInit } from '@angular/core';
import { HEROSPARAM } from '../../app/classe/mock-heros';
import { OPPENENTS } from '../../app/classe/mock-opponent';
import { Hero } from '../../app/classe/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { Oppenent } from '../../app/classe/opponent';

@Component({
  selector: 'vainqueur-mechant',
  templateUrl: `vainqueur-mechant.component.html`,
  styleUrls: ['./vainqueur-mechant.component.css']
})
export class VainqueurMechantComponent implements OnInit{

  herosListe:any;
  oppenent:Oppenent;
  heroParam:any;
  oppenentListe:any;
  oppenentParam:any;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit(): void {
    
    this.oppenentListe = OPPENENTS;

    const oppenentId: string | null = this.route.snapshot.paramMap.get('id');
    if (oppenentId) {
      console.log(oppenentId);
      
      this.oppenentParam = this.oppenentListe.find((oppenent: { id: number; }) => oppenent.id == +oppenentId);
      this.oppenent = new Oppenent(this.oppenentParam.id, this.oppenentParam.name, this.oppenentParam.power, this.oppenentParam.life, this.oppenentParam.attaqueSpeciale, this.oppenentParam.picture, this.oppenentParam.type);

    }else {
      this.router.navigate([''])
    }
  }

  goBack(): void {
    this.router.navigate([''])
  }
  
}
