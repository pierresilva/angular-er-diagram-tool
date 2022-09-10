import {Component, OnDestroy, OnInit} from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

// service
import { DataService } from '../service/data.service';

// class
import { Schema } from '../class/schema';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal',
  templateUrl: './modal-schema.component.html'
})

export class ModalSchemaComponent implements OnDestroy {

  public parent_model: any;
  public use_laravel_auth: any;

  public mode: string | any; // create or edit
  public schema: any;

  public fakerTypes: any[] = [
    'randomDigit()',
    'randomDigitNot(5)',
    'randomDigitNotNull',
    'randomNumber(NULL, false)',
    'randomFloat(NULL, 0, NULL)',
    'numberBetween(1000, 9000)',
    'randomLetter',
    'randomElements(["a", "b", "c"], 1)',
    'randomElement(["a","b","c"])',
    'numerify("Hello ###")',
    'lexify("Hello ???")',
    'regexify("[A - Z0 -9._ % +-] +@[A - Z0 - 9. -]+\.[A - Z]{ 2, 4 }")',
    'word',
    'words(3, true)',
    'sentence(6, true)',
    'sentences(3, true)',
    'paragraph(3, true)',
    'paragraphs(3, true)',
    'text(200)',
    'name("male")',
    'titleMale',
    'titleFemale',
    'firstNameMale',
    'firstNameFemale',
    'lastName',
    'city',
    'state',
    'country',
    'streetAddress',
    'address',
    'phoneNumber',
    'e164PhoneNumber',
    'company',
    'jobTitle',
    'realText(200, 2)',
    'dateTime("now", "America/Bogota")',
    'date("Y-m-d", "now")',
    'time("H: i: s", "now")',
    'dateTimeBetween("- 30 years", "now", "America/Bogota")',
    'email',
    'safeEmail',
    'freeEmail',
    'safeDomain',
    'userName',
    'password',
    'url',
    'slug',
    'ipv4',
    'ipv6',
    'macAddress',
    'userAgent',
    'creditCardType',
    'creditCardNumber',
    'creditCardExpirationDate',
    'creditCardExpirationDateString',
    'creditCardDetails',
    'iban("US")',
    'swiftBicNumber',
    'fileExtension',
    'mimeType',
    'file("/tmp", "/tmp", false)',
    'imageUrl(640, 480)',
    'image("/tmp", 640, 480, "cats")',
    'uuid',
    'ean13',
    'ean8',
    'isbn13',
    'isbn10',
    'boolean(50)',
    'md5',
    'sha1',
    'sha256',
    'locale',
    'countryCode',
    'languageCode',
    'currencyCode',
    'emoji',
  ];

  modalRef?: BsModalRef;
  constructor(
    public modalService: BsModalService,
    public dataService: DataService
  ) { }

  ngOnDestroy() {
    console.log('ModalSchemaComponent.ngOnDestroy() is called!');
    this.dataService.flg_repaint = true;
  }

  public create() {
    console.log('ModalSchemaComponent.create() is called!');
    this.dataService.addSchema(this.schema);
    this.modalService.hide();
  }
}
