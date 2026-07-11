import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    GalleryCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
