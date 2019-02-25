import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() message: string;
  @Input() type: 'success';

  constructor(private bsModalRef: BsModalRef) { }


  onClose(){
    this.bsModalRef.hide();
  }

}
