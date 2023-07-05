import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VainqueurComponent } from './vainqueur.component';

describe('VainqueurComponent', () => {
  let component: VainqueurComponent;
  let fixture: ComponentFixture<VainqueurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VainqueurComponent]
    });
    fixture = TestBed.createComponent(VainqueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
