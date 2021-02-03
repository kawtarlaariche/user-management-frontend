import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '@shared/components/custom-modal/custom-modal.component';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent extends CustomModalComponent implements OnInit {

  @Output()
  onUserUpdateForm = new EventEmitter<User>();

  @Input()
  selectedUser: User;

  constructor(protected modalService: NgbModal) {
    super(modalService);

    this.ariaLabelledBy = 'modal-user-update';
    this.modalTitle = 'User Update';
  }

  ngOnInit(): void {}

  onFormSubmit(user: User): void {
    this.modalRef.close();
    this.onUserUpdateForm.emit(user);
  }

}
