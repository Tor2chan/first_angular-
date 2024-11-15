import { Component,Output, EventEmitter }from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-search-radio',
  standalone: true,
  imports: [FormsModule, RadioButtonModule, InputTextModule, ButtonModule],
  templateUrl: './search-radio.component.html',
  styleUrl: './search-radio.component.css'
})

export class SearchRadioComponent {
  email_value!: string;
  username_value!: string;

  @Output() searchAll = new EventEmitter<void>();
  @Output() searchByEmail = new EventEmitter<string>();
  @Output() searchByUsername = new EventEmitter<string>();

  click_search_all() {
      this.searchAll.emit();
  }

  click_search_email() {
      this.searchByEmail.emit(this.email_value);
  }

  click_search_username() {
      this.searchByUsername.emit(this.username_value);
  }
}
