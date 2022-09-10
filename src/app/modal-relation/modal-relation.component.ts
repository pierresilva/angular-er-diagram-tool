// core
import { Component } from '@angular/core';

// ngx-bootstrap
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// service
import { DataService } from '../service/data.service';

// class
import { Model } from '../class/model';
import { Schema } from '../class/schema';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal',
  templateUrl: './modal-relation.component.html'
})

export class ModalRelationComponent {

  public source_model: Model | null | undefined;
  public target_model: Model | null | undefined;

  public relation_type: string;

  modalRef?: BsModalRef;
  constructor(
    public modalService: BsModalService,
    public dataService: DataService
  ) {
    console.log('ModalRelationComponent.constructor() is called!');
    this.relation_type = 'one-to-many';
  }

  public create() {
    console.log('ModalRelationComponent.create() is called!');
    if (this.relation_type == 'one-to-many') {
      // @ts-ignore
      this.dataService.addOneToManyRelation(this.source_model, this.target_model);
    } else if (this.relation_type == 'many-to-many') {
      // @ts-ignore
      this.dataService.addManyToManyRelation(this.source_model, this.target_model);
    }
    this.modalService.hide();
  }
}
