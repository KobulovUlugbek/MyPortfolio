import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailIconsComponent } from './mail-icons.component';

describe('MailIconsComponent', () => {
  let component: MailIconsComponent;
  let fixture: ComponentFixture<MailIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailIconsComponent]
    });
    fixture = TestBed.createComponent(MailIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
