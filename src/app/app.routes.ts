import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'repos/:user', component: ReposComponent },
];
