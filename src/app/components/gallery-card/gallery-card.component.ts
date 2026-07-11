import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent {
  @Input() experience!: Experience;
  @Input() index: number = 0;

  isVisible = false;
  mouseX = 0;
  mouseY = 0;
  isHovering = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { this.isVisible = true; }, this.index * 200);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    setTimeout(() => observer.observe(document.getElementById('card-' + this.experience.id)!), 0);
  }

  get stars() { return this.experience.theme === 'space' ? [1,2,3,4,5,6,7,8] : []; }
  get dots() { return this.experience.theme === 'puzzle' ? [1,2,3,4,5,6] : []; }
  get pixels() { return this.experience.theme === 'game' ? [1,2,3,4,5,6,7,8] : []; }

  onMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    this.mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  }

  onMouseEnter() { this.isHovering = true; }
  onMouseLeave() {
    this.isHovering = false;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  navigate() {
    this.router.navigate(['/experiencia', this.experience.id]);
  }
}
