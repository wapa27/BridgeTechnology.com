import { Component, OnInit } from '@angular/core';
import { faSubway, faUsers, faLaptop } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faSubway = faSubway;
  faUsers = faUsers;
  faLaptop = faLaptop;

  constructor() { }

  ngOnInit(): void {
  }

}
