import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { User } from '../table-search-all/user/user';
import { Users } from '../table-search-all/users/users';


@Component({
  selector: 'app-table-username',
  templateUrl: './table-search-username.html',
  standalone: true,
  imports: [TableModule, CommonModule],
  providers: [Users],
})
export class TableUsername implements OnChanges {
  @Input() filterUsername: string = '';
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
    if (changes['filterUsername']) {
      this.applyFilter(); 
    }
  }

  applyFilter() {
    if (this.filterUsername.trim()) {
      this.filteredUsers = this.Users.filter(user =>
        user.username?.toLowerCase() === this.filterUsername.toLowerCase()
      );
    } else {
      this.filteredUsers = [];
    }
  }
  
}
