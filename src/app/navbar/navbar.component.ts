// core
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// ngx-bootstrap
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// service
import { DataService } from '../service/data.service';

// component
import { ModalDataComponent } from '../modal-data/modal-data.component';
import { ModalModelComponent } from '../modal-model/modal-model.component';
import { ModalDownloadComponent } from '../modal-download/modal-download.component';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

// class
import { Model } from '../class/model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  public isCollapsed: boolean = true;
  // @ts-ignore
  public bsModalRef: BsModalRef;

  constructor(private bsModalService: BsModalService, private dataService: DataService, private sanitizer: DomSanitizer) { }

  createModel(): void {
    console.log('NavbarComponent.createModel() is called!');
    this.bsModalRef = this.bsModalService.show(ModalModelComponent, {
      initialState: {
        mode: 'create',
        model: new Model(),
        // @ts-ignore
        use_laravel_auth: this.dataService.data.use_laravel_auth
      },
      ignoreBackdropClick: true
    });
  }

  exportJson(): void {
    console.log('NavbarComponent.exportJson() is called!');

    var theJSON = JSON.stringify(this.dataService.data, null, '  ');
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.bsModalRef = this.bsModalService.show(ModalDownloadComponent, {
      initialState: {
        uri: uri
      },
      ignoreBackdropClick: true
    });

  }

  importJson(): void {
    console.log('NavbarComponent.importJson() is called!');
    this.bsModalRef = this.bsModalService.show(ModalUploadComponent, {
      ignoreBackdropClick: true
    });
  }

  dataSetting(): void {
    console.log('NavbarComponent.dataSetting() is called!');

    this.bsModalRef = this.bsModalService.show(ModalDataComponent, {
      initialState: {
        // @ts-ignore
        data: this.dataService.data
      },
      ignoreBackdropClick: true
    });
  }

}
