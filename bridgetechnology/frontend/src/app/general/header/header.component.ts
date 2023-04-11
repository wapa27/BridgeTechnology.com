import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isDropDown : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDropDown(): void {
    this.isDropDown = !this.isDropDown;
    console.log(this.isDropDown);
  }
}
