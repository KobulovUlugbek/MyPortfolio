import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllPolloLocoComponent } from './ell-pollo-loco.component';

describe('EllPolloLocoComponent', () => {
  let component: EllPolloLocoComponent;
  let fixture: ComponentFixture<EllPolloLocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EllPolloLocoComponent]
    });
    fixture = TestBed.createComponent(EllPolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
