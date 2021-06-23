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
    path: 'users',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authenticate/authenticate.module').then(
        (m) => m.AuthenticateModule
      ),
  },
  {
    path: 'sample',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./sample/sample.module').then((m) => m.SampleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
