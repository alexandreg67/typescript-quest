import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisiTonHeroComponent } from './choisi-ton-hero.component';

describe('ChoisiTonHeroComponent', () => {
  let component: ChoisiTonHeroComponent;
  let fixture: ComponentFixture<ChoisiTonHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoisiTonHeroComponent]
    });
    fixture = TestBed.createComponent(ChoisiTonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
