import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { SimpleEmail } from 'src/app/model/SimpleEmail';

@Injectable({
  providedIn: 'root'
})
export class FooterService implements OnInit {

  private baseUrl = "http://localhost:8080/email-service/send-email"

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.sendEmail();
  }

  public sendEmail(): void {
    let simpleEmail: SimpleEmail = {
      name: 'Warren Payne',
      email: '30545WarrenPayne@gmail.com',
      phoneNumber: '714-337-3176',
      message: 'Hello world'
    };

    this.http.post(this.baseUrl, simpleEmail).subscribe(() => 'called email service from frontend');
  }
}
