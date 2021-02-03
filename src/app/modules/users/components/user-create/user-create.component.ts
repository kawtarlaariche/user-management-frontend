import { CustomModalComponent } from '@shared/components/custom-modal/custom-modal.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent extends CustomModalComponent implements OnInit {

  @Output()
  onUserCreateForm = new EventEmitter<User>();

  constructor(protected modalService: NgbModal) {
    super(modalService);

    this.ariaLabelledBy = 'modal-user-create';
    this.modalTitle = 'User Create';
  }

  ngOnInit(): void {}

  onFormSubmit(user: User): void {
    this.modalRef.close();
    this.onUserCreateForm.emit(user);
  }

}
