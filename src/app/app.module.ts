import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ModalDataComponent } from './modal-data/modal-data.component';
import { ModalDownloadComponent } from './modal-download/modal-download.component';
import { ModalModelComponent } from './modal-model/modal-model.component';
import { ModalRelationComponent } from './modal-relation/modal-relation.component';
import { ModalSchemaComponent } from './modal-schema/modal-schema.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { ModelComponent } from './model/model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SchemaComponent } from './schema/schema.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { JsPlumbService } from './service/jsPlumb.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModelComponent,
    SchemaComponent,
    ModalDataComponent,
    ModalModelComponent,
    ModalSchemaComponent,
    ModalRelationComponent,
    ModalDownloadComponent,
    ModalUploadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    NgSelectModule,
  ],
  providers: [
    DataService,
    JsPlumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
