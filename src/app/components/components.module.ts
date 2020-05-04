import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { CompanyInformationComponent } from './company-information/company-information.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule
    ],
    declarations: [
        ComponentsComponent,
        CompanyInformationComponent,
        CompanyServicesComponent
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
