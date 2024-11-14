import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable()
export class Users {
    getUsers(): Promise<User[]> {
        return Promise.resolve([
            {
                email: '1111@gmail.com',
                username: '1111',
                name: 'one one',
                role: 'admin'
            },
            {
                email: '2222@gmail.com',
                username: '2222',
                name: 'two two',
                role: 'user'
            },
        ]);
    }
}