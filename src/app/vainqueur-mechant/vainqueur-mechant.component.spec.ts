import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VainqueurMechantComponent } from './vainqueur-mechant.component';

describe('VainqueurMechantComponent', () => {
  let component: VainqueurMechantComponent;
  let fixture: ComponentFixture<VainqueurMechantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VainqueurMechantComponent]
    });
    fixture = TestBed.createComponent(VainqueurMechantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
