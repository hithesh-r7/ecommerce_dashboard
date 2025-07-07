import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MaindashComponent } from './components/maindash/maindash.component';   
import { NewuserComponent } from './components/newuser/newuser.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: MaindashComponent,  canActivate: [AuthGuard] },
  { path: 'newuser', component: NewuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
