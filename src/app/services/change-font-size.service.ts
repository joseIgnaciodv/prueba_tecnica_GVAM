import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeFontSizeService {
  fontSize: number = 14;

  constructor() {}

  increaseFontSize() {
    this.fontSize += 2; // Aumentar tamaño de la fuente en multiplos de 2
  }

  decreaseFontSize() {
    this.fontSize -= 2; // Reducir tamaño de la fuente en multiplos de 2
  }
}
