import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { ExperienceDetailComponent } from './components/experience-detail/experience-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryListComponent,
    GalleryCardComponent,
    ExperienceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
