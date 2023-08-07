import { Component, Input, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @Input() imprintSite = false;
  @ViewChild('menuToggleInput', { static: false }) menuToggleInput!: ElementRef;
  @ViewChildren('menuLink') menuLinks!: QueryList<ElementRef>;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.menuLinks.forEach((link: ElementRef) => {
      link.nativeElement.addEventListener('click', () => {
        this.menuToggleInput.nativeElement.checked = false;
      });
    });
  }

  navigateToSection() {
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
