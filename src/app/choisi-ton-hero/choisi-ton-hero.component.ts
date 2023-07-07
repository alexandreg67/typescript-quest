import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { HEROSPARAM } from '../classe/mock-heros';
import { Router } from '@angular/router';
import { Hero } from '../classe/hero';
import { herosTypeColorPipe } from '../heros-type-color.pipe';

@Component({
  selector: 'app-choisi-ton-hero',
  templateUrl: './choisi-ton-hero.component.html',
  styleUrls: ['./choisi-ton-hero.component.css']
})
export class ChoisiTonHeroComponent {

  @ViewChild('myModal') myModal: ElementRef;
  @ViewChild('heroCard') heroCard: ElementRef;

  heroId:number;
  heroName:string;
  heroType:string;

  listeHeros = HEROSPARAM;

  constructor(private router: Router, render: Renderer2) {
    
  }

  ngOnInit(): void {
    
  } 

  ngAfterViewInit(): void {
    console.log("viewChild", this.myModal);
    
  }
  openModal(heroIdModal: number, heroNameModal:string, heroTypeModal: string) {
    this.myModal.nativeElement.style.display = "block";
    console.log("heroId", heroIdModal);
    this.heroId = heroIdModal;
    this.heroName = heroNameModal;
    this.heroType = heroTypeModal;

  }

  closeModal(): void {
    this.myModal.nativeElement.style.display = "none";
  }

}
