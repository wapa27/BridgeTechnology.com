import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterService } from './footer.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactUsFormControl = new FormControl('');
  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.sendEmail();
  }

}
