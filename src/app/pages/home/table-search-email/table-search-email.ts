import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { User } from '../table-search-all/user/user';
import { Users } from '../table-search-all/users/users';


@Component({
  selector: 'app-table-email',
  templateUrl: './table-search-email.html',
  standalone: true,
  imports: [TableModule, CommonModule],
  providers: [Users],
})
export class TableEmail implements OnChanges {
  @Input() filterEmail: string = '';
  Users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private users: Users) {}

  ngOnInit() {
    this.users.getUsers().then((data) => {
      this.Users = data;
      this.applyFilter(); 
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterEmail']) {
      this.applyFilter(); 
    }
  }

  applyFilter() {
    if (this.filterEmail.trim()) {
      this.filteredUsers = this.Users.filter(user =>
        user.email?.toLowerCase() === this.filterEmail.toLowerCase()
      );
    } else {
      this.filteredUsers = [];
    }
  }
  
}
