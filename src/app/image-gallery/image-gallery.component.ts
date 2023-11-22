import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.scss',
})
export class ImageGalleryComponent {
  @Input() links: string[] = [];

  constructor() {}
  removeImage(index: number): void {
    // Ensure the index is within bounds
    if (index >= 0 && index < this.links.length) {
      // Remove the image at the specified index
      this.links.splice(index, 1);
    }
  }
}
