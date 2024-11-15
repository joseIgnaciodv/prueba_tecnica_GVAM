import { Component } from '@angular/core';
import { ChangeFontSizeService } from './services/change-font-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_tecnica_GVAM';

  constructor(private changeSize: ChangeFontSizeService) {}

  increaseFontSize() {
    this.changeSize.increaseFontSize();
    let fontSize = this.changeSize.getFontSize();
    document.getElementById('scrollable-text')!.style.fontSize =
      fontSize + 'px';
  }

  decreaseFontSize() {
    this.changeSize.decreaseFontSize();
    let fontSize = this.changeSize.getFontSize();
    document.getElementById('scrollable-text')!.style.fontSize =
      fontSize + 'px';
  }
}
