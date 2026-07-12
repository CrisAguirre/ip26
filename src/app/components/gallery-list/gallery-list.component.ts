import { Component } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent {
  experiences: Experience[];
  isVisible = false;

  constructor(private galleryService: GalleryService) {
    this.experiences = this.galleryService.getAll();
  }

  ngOnInit() {
    setTimeout(() => { this.isVisible = true; }, 100);
  }

  getUniqueCountries(): number {
    const origins = this.experiences.map(e => e.origin);
    return new Set(origins.map(o => o.split('(')[0].trim())).size;
  }

  getTotalImpact(): number {
    return this.experiences.reduce((sum, e) => sum + e.results.length, 0);
  }

  getUniqueMethods(): number {
    return new Set(this.experiences.map(e => e.methodology)).size;
  }
}
