import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-my-works-header',
  templateUrl: './my-works-header.component.html',
  styleUrls: ['./my-works-header.component.scss']
})
export class MyWorksHeaderComponent  implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
