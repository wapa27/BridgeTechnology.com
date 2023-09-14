import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SimpleEmail } from 'src/app/model/SimpleEmail';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private baseUrl = "http://localhost:8080/email-service/send-email"

  constructor(private http: HttpClient) { }

  public sendEmail(name: string, email: string, phoneNumber: string, message: string): void {
    // Create an email object to send to backend
    const simpleEmail: SimpleEmail = new SimpleEmail;
    simpleEmail.name = name;
    simpleEmail.email = email;
    simpleEmail.phoneNumber = phoneNumber;
    simpleEmail.message = message;

    // Post
    this.http.post(this.baseUrl, simpleEmail).subscribe(result => { });
  }
}
