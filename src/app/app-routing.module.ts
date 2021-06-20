import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authenticate/login/login.component';
import { PasswordResetComponent } from './authenticate/password-reset/password-reset.component';
import { RegisterComponent } from './authenticate/register/register.component';
import { AuthLayoutComponent } from './shared/_layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './shared/_layouts/main-layout/main-layout.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'reset-password',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: PasswordResetComponent,
      },
    ],
  },
  {
    path: 'sign-up',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'users',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
