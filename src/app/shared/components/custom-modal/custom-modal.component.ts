import { Component } from '@angular/core';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  template: ''
})
export class CustomModalComponent {

  modalTitle: string;
  ariaLabelledBy: string;
  modalRef: NgbModalRef;

  constructor(protected modalService: NgbModal) {}

  open(modal) {
    this.modalRef = this.modalService.open(modal, {
      ariaLabelledBy: this.ariaLabelledBy,
    });
    this.modalRef.result.then(
      (result) => {},
      (reason) => {}
    );
  }

}
