import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

}
