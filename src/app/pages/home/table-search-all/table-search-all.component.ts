import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { User } from './user/user';
import { Users } from './users/users';

@Component({
    selector: 'search-all',
    templateUrl: './table-search-all.component.html',  
    standalone: true,
    imports: [TableModule, CommonModule],
    providers: [Users]
})
export class TableAll {
    Users!: User[];

    constructor(private users: Users) {}

    ngOnInit() {
        this.users.getUsers().then((data) => {
            this.Users = data;
        });
    }
}