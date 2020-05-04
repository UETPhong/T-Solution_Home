import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ConComponent } from './con/con.component';



@NgModule({
  declarations: [ContactsComponent, ConComponent],
  imports: [
    CommonModule
  ]
})
export class ContactsModule { }
