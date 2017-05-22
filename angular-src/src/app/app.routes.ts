import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AddNewQuestionComponent } from './components/admin/questions/add-new-question/add-new-question.component';
import { AddNewAlternativeComponent } from './components/admin/questions/add-new-alternative/add-new-alternative.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { EditAlternativesComponent } from './components/admin/questions/edit-alternatives/edit-alternatives.component';
import { EditQuestionComponent } from './components/admin/questions/edit-question/edit-question.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'question/add', component: AddNewQuestionComponent, canActivate: [AuthGuard] },
    { path: 'alternatives/add', component: AddNewAlternativeComponent, canActivate: [AuthGuard] },
    { path: 'question', component: QuestionsComponent, canActivate: [AuthGuard] },
    { path: 'question/edit/:id', component: EditQuestionComponent, canActivate: [AuthGuard] },
    { path: 'alternatives/edit/:id', component: EditAlternativesComponent, canActivate: [AuthGuard] }


];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);