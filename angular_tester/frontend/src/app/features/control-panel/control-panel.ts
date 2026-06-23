import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewService } from '../../core/services/preview';

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-panel.html',
  styleUrls: ['./control-panel.css']
})
export class ControlPanelComponent {

  html: string = '';
  controls: any[] = [];

  constructor(private previewService: PreviewService) {

    this.previewService.html$.subscribe((url: string) => {

      this.html = url || '';
      this.controls = this.extractControls(this.html);

    });

  }

  extractControls(html: string) {
    if (!html) return [];

    const div = document.createElement('div');
    div.innerHTML = html;

    const nodes = div.querySelectorAll('[data-control]');

    return Array.from(nodes).map((el: any) => ({
      type: el.getAttribute('data-control'),
      label: el.getAttribute('data-label') || 'Control'
    }));
  }
}