import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  { path: 'signin',  component: WelcomeComponent},
  { path: 'signup',  component: SignupComponent},
  { path: 'home', component: HomeComponent}
];
