import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlecComponent } from './articlec.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ArticlecComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ArticlecModule { }
