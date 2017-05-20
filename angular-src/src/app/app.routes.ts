import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import {AddNewQuestionComponent} from './components/admin/add-new-question/add-new-question.component';
import {AddNewAlternativeComponent} from './components/admin/add-new-alternative/add-new-alternative.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'questions', component: AddNewQuestionComponent, canActivate: [AuthGuard] },
    { path: 'alternatives', component: AddNewAlternativeComponent, canActivate: [AuthGuard] }
    
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);