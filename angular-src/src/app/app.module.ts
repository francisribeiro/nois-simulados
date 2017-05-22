import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProfileComponent } from './components/admin/profile/profile.component';

import { APP_ROUTES_PROVIDER } from './app.routes';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AddNewQuestionComponent } from './components/admin/questions/add-new-question/add-new-question.component';
import { AddNewAlternativeComponent } from './components/admin/questions/add-new-alternative/add-new-alternative.component';
import { QuestionsComponent } from './components/admin/questions/questions.component';
import { TruncatePipe } from './pipes/truncate';
import { EditQuestionComponent } from './components/admin/questions/edit-question/edit-question.component';
import { EditAlternativesComponent } from './components/admin/questions/edit-alternatives/edit-alternatives.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddNewQuestionComponent,
    AddNewAlternativeComponent,
    QuestionsComponent,
    TruncatePipe,
    EditQuestionComponent,
    EditAlternativesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER,
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
