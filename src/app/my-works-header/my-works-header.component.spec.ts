import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorksHeaderComponent } from './my-works-header.component';

describe('MyWorksHeaderComponent', () => {
  let component: MyWorksHeaderComponent;
  let fixture: ComponentFixture<MyWorksHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyWorksHeaderComponent]
    });
    fixture = TestBed.createComponent(MyWorksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
