import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() private errorMessage: String
  @Output() modalClosed = new EventEmitter()

  constructor() { }

  close() {
    this.modalClosed.emit();
  }

  ngOnInit() {
  }

}
