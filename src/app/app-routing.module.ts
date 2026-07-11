import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
import { ExperienceDetailComponent } from './components/experience-detail/experience-detail.component';

const routes: Routes = [
  { path: '', component: GalleryListComponent },
  { path: 'experiencia/:id', component: ExperienceDetailComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
