import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDropDown: boolean = false;
  constructor() { }

  toggleDropDown(): void {
    this.isDropDown = !this.isDropDown;
  }

  // Scrolls to page Footer
  public scrollToFooter() {
    document.getElementById("footer")?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }
}
