import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './_layouts/main-layout/main-layout.component';
import { FooterComponent } from './_layouts/footer/footer.component';
import { HeaderComponent } from './_layouts/header/header.component';
import { RouterModule } from '@angular/router';
import { NgbNav, NgbNavbar, NgbNavItem, NgbNavLink, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbNav,
    NgbNavbar,
    NgbNavItem,
    NgbNavOutlet
  ]
})

export class SharedModule { }
