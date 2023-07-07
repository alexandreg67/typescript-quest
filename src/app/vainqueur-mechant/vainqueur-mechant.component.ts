import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HEROSPARAM } from '../../app/classe/mock-heros';
import { OPPENENTS } from '../../app/classe/mock-opponent';
import { Hero } from '../../app/classe/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { Oppenent } from '../../app/classe/opponent';
import { gsap } from 'gsap';

@Component({
  selector: 'vainqueur-mechant',
  templateUrl: `vainqueur-mechant.component.html`,
  styleUrls: ['./vainqueur-mechant.component.css']
})
export class VainqueurMechantComponent implements OnInit{

  @ViewChild('cardVictory') imgOppenentPicture: ElementRef;

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
    console.log(this.oppenent.type);
    
  }

  ngAfterViewInit():void {
    console.log(this.imgOppenentPicture);
    gsap.fromTo(
    this.imgOppenentPicture.nativeElement,
    { rotationX: 0, rotationY: 0 },
    { rotationX: -60, rotationY: -360, yoyo:true, repeat:3 },
    );
  }

  goBack(): void {
    this.router.navigate([''])
  }
  
}
