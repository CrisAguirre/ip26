import { Component } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  experiences: Experience[];
  selectedExperience: Experience | null = null;
  showModal = false;
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

  getUniqueMethods(): number {
    return new Set(this.experiences.map(e => e.methodology)).size;
  }

  onViewDetail(experience: Experience) {
    this.selectedExperience = experience;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  onCloseModal() {
    this.showModal = false;
    document.body.style.overflow = '';
    setTimeout(() => { this.selectedExperience = null; }, 300);
  }
}
