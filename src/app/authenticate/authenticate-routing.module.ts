import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../shared/_layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from '../shared/_layouts/main-layout/main-layout.component';
import { UsersComponent } from '../users/users.component';
import { LoginComponent } from './login/login.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'reset-password',
    children: [
      {
        path: '',
        component: PasswordResetComponent,
      },
    ],
  },
  {
    path: 'sign-up',
    children: [
      {
        path: '',
        component: RegisterComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticateRoutingModule {}
