import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartsiteComponent } from './startsite.component';

describe('StartsiteComponent', () => {
  let component: StartsiteComponent;
  let fixture: ComponentFixture<StartsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartsiteComponent]
    });
    fixture = TestBed.createComponent(StartsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
