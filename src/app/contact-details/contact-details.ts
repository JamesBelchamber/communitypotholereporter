import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.html',
  styleUrls: ['./contact-details.css']
})
export class ContactDetailsComponent {
  @Input() contact: contact = {};
  submitted: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  onClickSend(): void {
    this.http.post('https://ivwejxpei0.execute-api.eu-west-2.amazonaws.com/Production/userdetails', JSON.stringify(this.contact), { headers: new HttpHeaders().set('Content-Type', 'application/json') }).subscribe();
    this.submitted = true;
  }

  onClickBack(): void {
    this.router.navigate(['/place-a-pin']);
  }
}

interface contact {
  name?: string;
  email?: string;
  phone?: string;
}
