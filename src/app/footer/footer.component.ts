import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  navigateToSection() {
    const section = document.getElementById('header-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
