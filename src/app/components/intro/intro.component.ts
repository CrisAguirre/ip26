import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @Output() enter = new EventEmitter<void>();
  showContent = false;

  ngOnInit() {
    setTimeout(() => { this.showContent = true; }, 500);
  }

  onEnter() {
    this.enter.emit();
  }
}
