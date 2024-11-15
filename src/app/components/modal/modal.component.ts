import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Output() toggleModal = new EventEmitter<boolean>();

  closeModal() {
    this.toggleModal.emit(false);
    this.open = false;
  }
}
