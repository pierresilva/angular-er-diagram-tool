import { Component } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// service
import { DataService } from '../service/data.service';

// class
import { Schema } from '../class/schema';

@Component({
  selector: 'modal',
  templateUrl: './modal-schema.component.html'
})

export class ModalSchemaComponent {

  public parent_model = null;
  public use_laravel_auth = null;

  public mode: string; // create or edit
  public schema: Schema;

  constructor(public bsModalRef: BsModalRef, public dataService: DataService) { }

  ngOnDestroy() {
    console.log('ModalSchemaComponent.ngOnDestroy() is called!');
    this.dataService.flg_repaint = true;
  }

  public create() {
    console.log('ModalSchemaComponent.create() is called!');
    this.dataService.addSchema(this.schema);
    this.bsModalRef.hide();
  }
}
