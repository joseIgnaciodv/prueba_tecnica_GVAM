import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit {
  @Input() openFullScreen: boolean = false;
  @Output() modeChange = new EventEmitter<boolean>();

  constructor() {}

  closeFullscreenMode() {
    this.openFullScreen = false;
    this.modeChange.emit(false);
  }

  ngOnInit() {}
}
