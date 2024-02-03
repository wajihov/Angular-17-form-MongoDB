import { Routes } from '@angular/router';
import { UserComponent } from './auth/user/user.component';
import { ListComponent } from './auth/list/list.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LoginInComponent } from './user/login-in/login-in.component';

export const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'user', component: UserComponent },
    { path: 'list', component: ListComponent },
    { path: 'signIn', component: LoginInComponent }
    //{ path: "**", component: NotFoundComponent }
];
