import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FooterService } from './footer.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  clientMessage: string;

  constructor(private footerService: FooterService) { }

  sendEmail(): void {
    if (this.clientName && this.clientEmail && this.clientPhone && this.clientMessage) {
      this.footerService.sendEmail(this.clientName, this.clientEmail, this.clientPhone, this.clientMessage);
      // Clear input fields after email is sent
      this.clearFields();
    }
  }

  // Clears input fields in Email Form
  private clearFields(): void {
    this.clientName = '';
    this.clientEmail = '';
    this.clientPhone = '';
    this.clientMessage = '';
  }

}
