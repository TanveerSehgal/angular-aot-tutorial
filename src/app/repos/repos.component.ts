import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../models/repo.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit {
    repos: Repo[] | any = [];
    searched: Boolean = false;

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (!params['user']) { return; }
            this.getRepos(params['user']);
        });
    }

    getRepos(user) {
        this.http.get(`https://api.github.com/users/${user}/repos`)
            .subscribe(data => {
                this.repos = data;
                this.searched = true;
            });
    }
}
