import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRadioComponent } from "./search-radio/search-radio.component";
import { TableAll } from './table-search-all/table-search-all.component';
import { TableEmail } from './table-search-email/table-search-email';
import { TableUsername } from './table-search-username/table-search-username';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RadioButtonModule,TableEmail,TableAll,TableUsername,SearchRadioComponent],
  template: `
          <div>
      <app-search-radio 
        (searchAll)="onSearchAll()"
        (searchByEmail)="onSearchByEmail($event)"
        (searchByUsername)="onSearchByUsername($event)">
      </app-search-radio>
      
 
      <div *ngIf="showAll">
        <search-all></search-all>
      </div>
      
 
      <div *ngIf="showEmail">
        <app-table-email [filterEmail]="email_value"></app-table-email>
      </div>
      
    
      <div *ngIf="showUsername">
      <app-table-username [filterUsername]="username_value"></app-table-username>
      </div>
            `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  showAll = false;
  showEmail = false;
  showUsername = false;
  email_value: string = '';
  username_value: string = '';

  onSearchAll() {
    this.showAll = true;
    this.showEmail = false;
    this.showUsername = false;
  }

  onSearchByEmail(email: string) {
    this.showAll = false;
    this.showEmail = true;
    this.showUsername = false;
    this.email_value = email;
  }

  onSearchByUsername(username: string) {
    this.showAll = false;
    this.showEmail = false;
    this.showUsername = true;
    this.username_value = username;
  }
}
