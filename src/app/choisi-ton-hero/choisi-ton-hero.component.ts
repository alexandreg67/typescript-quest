import { Component } from '@angular/core';
import { HEROSPARAM } from '../classe/mock-heros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choisi-ton-hero',
  templateUrl: './choisi-ton-hero.component.html',
  styleUrls: ['./choisi-ton-hero.component.css']
})
export class ChoisiTonHeroComponent {
   listeHeros = HEROSPARAM;

  constructor(private router: Router) {
    
  }

  ngOnInit(): void {
    
  } 

}
