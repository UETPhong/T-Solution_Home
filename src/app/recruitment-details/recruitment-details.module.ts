import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentDetailsComponent } from './recruitment-details.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [RecruitmentDetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    ModalModule.forRoot(),
    CKEditorModule

  ]
})
export class RecruitmentDetailsModule { }
