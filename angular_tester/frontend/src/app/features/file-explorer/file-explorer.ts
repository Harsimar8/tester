import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../../core/services/upload';
import { PreviewService } from '../../core/services/preview';
import { LivePreviewComponent } from '../live-preview/live-preview';

@Component({
  selector: 'app-file-explorer',
  standalone: true,
  imports: [CommonModule, LivePreviewComponent],
  templateUrl: './file-explorer.html'
})
export class FileExplorerComponent {

  htmlFiles: any[] = [];

  constructor(
    private uploadService: UploadService,
    private previewService: PreviewService
  ) {

    this.uploadService.files$.subscribe(files => {
      this.htmlFiles = files.filter(f =>
        f.name?.toLowerCase().endsWith('.html')
      );
    });
  }

 openFile(file: any) {
  if (!file?.content) return;

  const blob = new Blob([file.content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);

  this.previewService.setHtml(url);
}
}