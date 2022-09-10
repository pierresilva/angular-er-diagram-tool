// core
import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'modal',
  templateUrl: './modal-download.component.html'
})

export class ModalDownloadComponent {

  // @ts-ignore
  public uri: SafeUrl; // create or edit
  modalRef?: BsModalRef;
  constructor(
    public modalService: BsModalService
  ) { }
}
