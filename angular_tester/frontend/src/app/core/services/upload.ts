import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UploadedFile {
  name: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class UploadService {

  private STORAGE_KEY = 'uploaded_files';

  private filesSubject = new BehaviorSubject<UploadedFile[]>(
    this.loadFromStorage()
  );

  files$ = this.filesSubject.asObservable();

  setFiles(newFiles: UploadedFile[]) {

    const existing = this.getFiles();
    const merged = [...existing, ...newFiles];

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(merged));
    this.filesSubject.next(merged);
  }

  getFiles() {
    return this.filesSubject.value;
  }

  private loadFromStorage(): UploadedFile[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.filesSubject.next([]);
  }
}