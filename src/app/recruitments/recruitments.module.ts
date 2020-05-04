import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitmentsComponent } from './recruitments.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    RecruitmentsComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    ModalModule.forRoot(),
  ],
  entryComponents: [],
  exports: [RecruitmentsComponent]
})
export class RecruitmentsModule { }
