import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent {
    user = {
        name: 'Angular',
        avatar_url: 'https://avatars3.githubusercontent.com/u/139426?v=4',
        type: 'Organization',
        public_repos: 53,
        public_gists: 357,
    };
}
