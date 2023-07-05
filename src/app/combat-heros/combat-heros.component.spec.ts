import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatHerosComponent } from './combat-heros.component';

describe('CombatHerosComponent', () => {
  let component: CombatHerosComponent;
  let fixture: ComponentFixture<CombatHerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombatHerosComponent]
    });
    fixture = TestBed.createComponent(CombatHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
