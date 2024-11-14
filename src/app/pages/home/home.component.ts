import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { SearchRadioComponent } from "./search-radio/search-radio.component";
import { TableAll } from './table-search-all/table-search-all.component';

@Component({
  selector: 'app-serach-radio',
  standalone: true,
  imports: [FormsModule, RadioButtonModule,TableAll,SearchRadioComponent],
  template: '<div><app-search-radio/><search-all/></div>',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  search_by!: string;

}
