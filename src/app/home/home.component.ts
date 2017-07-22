import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    users: User[] = [];

    constructor(
        private http: HttpClient
    ) { }

    searchUsers(searchTerm: String) {
        if (!searchTerm) {
            this.users = [];
            return;
        }

        this.http.get(`https://api.github.com/search/users?q=${searchTerm}`)
            .subscribe(data => {
                this.users = data['items'];
            });
    }
}
