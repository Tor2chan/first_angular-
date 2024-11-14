import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-radio',
  standalone: true,
  imports: [FormsModule, RadioButtonModule],
  templateUrl: './search-radio.component.html',
  styleUrl: './search-radio.component.css'
})

export class SearchRadioComponent {
  search_by!: string;

}
