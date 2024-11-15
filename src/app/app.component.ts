import { Component } from '@angular/core';
import { ChangeFontSizeService } from './services/change-font-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_tecnica_GVAM';
  open: boolean = false; // Variable encargada de determinar si esta abierto o cerrado el modal

  constructor(private changeSize: ChangeFontSizeService) {}

  // Función encargada de abrir el modal, poniendo el valor de 'open' a verdadero
  openModal() {
    this.open = true;
  }

  // Función encargada de tratar el cambio de valor de la variable 'open', desde el componente hijo (modal - component)
  handleToggle(value: boolean) {
    this.open = value;
  }

  // Función encargada de incrementar el tamaño de la fuente, llamando a la función (increaseFontSize) del servicio
  increaseFontSize() {
    this.changeSize.increaseFontSize();
    let fontSize = this.changeSize.getFontSize();
    document.getElementById('scrollable-text')!.style.fontSize =
      fontSize + 'px';
  }

  // Función encargada de reducir el tamaño de la fuente, llamando a la función (decreaseFontSize) del servicio
  decreaseFontSize() {
    this.changeSize.decreaseFontSize();
    let fontSize = this.changeSize.getFontSize();
    document.getElementById('scrollable-text')!.style.fontSize =
      fontSize + 'px';
  }
}
