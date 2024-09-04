import { CommonModule } from '@angular/common';
import { afterNextRender, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-froala',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule, CommonModule],
  templateUrl: './froala.component.html',
  styleUrl: './froala.component.css',
})
export class FroalaComponent {
  isBrowser = false;
  constructor(private cdr: ChangeDetectorRef) {
    afterNextRender(() => {
      this.isBrowser = true;
      this.cdr.detectChanges();
    });
  }
}
