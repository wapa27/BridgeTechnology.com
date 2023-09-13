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
  }

  public sendEmail(name: string, email: string, phoneNumber: string, message: string): void {
    const simpleEmail: SimpleEmail = new SimpleEmail;
    simpleEmail.name = name;
    simpleEmail.email = email;
    simpleEmail.phoneNumber = phoneNumber;
    simpleEmail.message = message;

    this.http.post(this.baseUrl, simpleEmail).subscribe(result => console.log(result));
  }
}
