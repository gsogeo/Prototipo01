import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import {EnderecoService} from "./services/endereco.service";
import { MapaComponent } from './components/mapa/mapa.component';


@NgModule({
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ServerErrorMessagesComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
    exports: [
        //shared modules
        CommonModule,
        ReactiveFormsModule,
        RouterModule,

        //shared components
        BreadCrumbComponent,
        PageHeaderComponent,
        FormFieldErrorComponent,
        ServerErrorMessagesComponent,
        MapaComponent
    ]
})
export class SharedModule { }