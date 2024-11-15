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
    email_value !: string;
    username_value!: string;
    search_all_active!: boolean;

    @Output() searchAllActiveChange = new EventEmitter<boolean>();


    click_search_all(){
      this.search_all_active = true;
      this.searchAllActiveChange.emit(this.search_all_active);
    }
}
