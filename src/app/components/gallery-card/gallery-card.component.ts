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
  mousePX = 0.5;
  mousePY = 0.5;
  isHovering = false;
  isClicked = false;

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

  get stars() { return this.experience.theme === 'space' ? [1,2,3,4,5,6,7,8,9,10,11,12,13,14] : []; }
  get comets() { return this.experience.theme === 'space' ? [1,2,3,4] : []; }
  get planets() { return this.experience.theme === 'space' ? [1,2,3] : []; }
  get satellites() { return this.experience.theme === 'space' ? [1,2] : []; }

  get dots() { return this.experience.theme === 'puzzle' ? [1,2,3,4,5,6,7,8,9,10] : []; }
  get floaters() { return this.experience.theme === 'puzzle' ? [1,2,3,4] : []; }
  get pieces() { return this.experience.theme === 'puzzle' ? [1,2,3,4,5] : []; }
  get chains() { return this.experience.theme === 'puzzle' ? [1,2,3,4] : []; }

  get pixels() { return this.experience.theme === 'game' ? [1,2,3,4,5,6,7,8,9,10,11,12] : []; }
  get sparks() { return this.experience.theme === 'game' ? [1,2,3,4,5,6] : []; }
  get coins() { return this.experience.theme === 'game' ? [1,2,3] : []; }
  get blocks() { return this.experience.theme === 'game' ? [1,2,3,4,5] : []; }



  get glowTransform(): string {
    if (!this.isHovering) return '';
    const x = (this.mousePX - 0.5) * 40;
    const y = (this.mousePY - 0.5) * 40;
    return `translate(${x}px, ${y}px)`;
  }

  onMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    this.mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    this.mousePX = (e.clientX - rect.left) / rect.width;
    this.mousePY = (e.clientY - rect.top) / rect.height;
  }

  onMouseEnter() { this.isHovering = true; }
  onMouseLeave() {
    this.isHovering = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.mousePX = 0.5;
    this.mousePY = 0.5;
  }

  onClick() {
    this.isClicked = true;
    setTimeout(() => { this.isClicked = false; }, 600);
    setTimeout(() => { this.router.navigate(['/experiencia', this.experience.id]); }, 150);
  }
}
