import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent {
  @Input() experience!: Experience;
  @Input() index: number = 0;
  @Output() viewDetail = new EventEmitter<Experience>();

  isVisible = false;

  ngOnInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { this.isVisible = true; }, this.index * 150);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    setTimeout(() => observer.observe(document.getElementById('card-' + this.experience.id)!), 0);
  }

  onViewDetail() {
    this.viewDetail.emit(this.experience);
  }
}
