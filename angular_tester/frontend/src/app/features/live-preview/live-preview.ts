import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PreviewService } from '../../core/services/preview';

@Component({
  selector: 'app-live-preview',
  standalone: true,
  templateUrl: './live-preview.html',
  styleUrls: ['./live-preview.css']
})
export class LivePreviewComponent {

  url!: SafeResourceUrl;

  constructor(
    private previewService: PreviewService,
    private sanitizer: DomSanitizer
  ) {

    this.previewService.html$.subscribe(url => {
      if (!url) return;

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    });
  }
}