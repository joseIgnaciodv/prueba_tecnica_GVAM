import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { ModalComponent } from './components/modal/modal.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FullscreenComponent } from './components/fullscreen/fullscreen.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    SectionTitleComponent,
    ModalComponent,
    CarruselComponent,
    FullscreenComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot({})],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Añadir CUSTOM_ELEMENTS_SCHEMA, para registrar los componentes de swiperjs
})
export class AppModule {}
