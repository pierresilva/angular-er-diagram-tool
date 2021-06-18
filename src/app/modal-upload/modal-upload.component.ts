// core
import { Component } from '@angular/core';

// ngx-bootstrap
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// service
import { DataService } from '../service/data.service';
import { JsPlumbService } from '../service/jsPlumb.service';

@Component({
  selector: 'modal',
  templateUrl: './modal-upload.component.html'
})

export class ModalUploadComponent {

  public _flg_file_selected: boolean;
  public _flg_file_loaded: boolean;
  public _data;

  constructor(public bsModalRef: BsModalRef, public dataService: DataService, public jsPlumbService: JsPlumbService) {
    this._flg_file_selected = false;
    this._flg_file_loaded = false;
  }

  public onFileSelected(event) {
    console.log('ModalUploadComponent.onFileSelected() is called!');

    if (event.target.files.length <= 0) {
      this._flg_file_selected = false;
      this._flg_file_loaded = false;
      return false;
    }

    this._flg_file_selected = true;

    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.addEventListener('load', () => {
      console.log(JSON.parse(reader.result));
      this._flg_file_loaded = true;
      this._data = JSON.parse(reader.result);
    });

  }

  public uploadJson() {
    console.log('ModalUploadComponent.uploadJson() is called!');
    this.jsPlumbService.deleteAll();
    this.dataService.loadData(this._data);
    this.bsModalRef.hide();
  }
}
