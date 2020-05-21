import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { RecruitmentDetailsComponent } from './recruitment-details/recruitment-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RtAdminComponent } from './rt-admin/rt-admin.component';
import { ArticlecComponent } from './articlec/articlec.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'recruitments', component: RecruitmentsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'recruitment-details/:id', component: RecruitmentDetailsComponent },
  { path: 'admin', component: RtAdminComponent },
  { path: 'articlec/:id', component: ArticlecComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
