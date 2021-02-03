import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomModalComponent } from '@shared/components/custom-modal/custom-modal.component';
import { User } from '@shared/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent extends CustomModalComponent implements OnInit {

  @Input()
  user: User;


  constructor(protected modalService: NgbModal) {
    super(modalService);

    this.ariaLabelledBy = 'modal-user-details';
    this.modalTitle = 'User Details';

  }

  ngOnInit(): void {
  }

}
