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
    console.log("header present")
  }

  toggleDropDown(): void {
    this.isDropDown = !this.isDropDown;
  }

  public scrollToFooter() {
      console.log("scrolling to bottom");
      // window.scrollTo(0,document.body.scrollHeight);
      document.getElementById("footer")?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
  }
}
