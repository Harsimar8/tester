import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFolderComponent } from '../../features/upload-folder/upload-folder';
import { FileExplorerComponent } from '../../features/file-explorer/file-explorer';
import { ControlPanelComponent } from '../../features/control-panel/control-panel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    UploadFolderComponent,
    FileExplorerComponent,
    ControlPanelComponent
  ],
  templateUrl: './dashboard.html'
})
export class DashboardComponent {}