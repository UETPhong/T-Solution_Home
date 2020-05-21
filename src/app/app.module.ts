import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { RecruitmentsModule } from './recruitments/recruitments.module';
import { ContactsModule } from './contacts/contacts.module';
import { RecruitmentDetailsModule } from './recruitment-details/recruitment-details.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RtAdminComponent } from './rt-admin/rt-admin.component';
import { ArticlecModule } from './articlec/articlec.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RtAdminComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    RecruitmentsModule,
    ContactsModule,
    RecruitmentDetailsModule,
    FontAwesomeModule,
    ArticlecModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
