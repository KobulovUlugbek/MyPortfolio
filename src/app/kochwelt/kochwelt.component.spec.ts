import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KochweltComponent } from './kochwelt.component';

describe('KochweltComponent', () => {
  let component: KochweltComponent;
  let fixture: ComponentFixture<KochweltComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KochweltComponent]
    });
    fixture = TestBed.createComponent(KochweltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
