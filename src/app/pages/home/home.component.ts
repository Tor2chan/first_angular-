import { Component } from '@angular/core';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchRadioComponent } from "./search-radio/search-radio.component";
import { TableAll } from './table-search-all/table-search-all.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,RadioButtonModule,TableAll,SearchRadioComponent],
  template: `
  <div>
      <app-search-radio (searchAllActiveChange)="onSearchAllActiveChange($event)"></app-search-radio>
      <div *ngIf="search_all_active">
        <search-all></search-all>
      </div>
    </div>

            `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  search_all_active: boolean = false;

  onSearchAllActiveChange(value: boolean) {
    this.search_all_active = value;
  }

}
