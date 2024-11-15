import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeFontSizeService {
  fontSize: number = 16; // Tamaño de fuente por defecto

  constructor() {}

  getFontSize() {
    return this.fontSize;
  }

  increaseFontSize() {
    this.fontSize += 2; // Aumentar tamaño de la fuente en multiplos de 2
  }

  decreaseFontSize() {
    this.fontSize -= 2; // Reducir tamaño de la fuente en multiplos de 2
  }
}
