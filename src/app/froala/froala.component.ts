import { afterNextRender, Component } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@Component({
  selector: 'app-froala',
  standalone: true,
  imports: [FroalaEditorModule, FroalaViewModule],
  templateUrl: './froala.component.html',
  styleUrl: './froala.component.css',
})
export class FroalaComponent {
  isBrowser = false;
  constructor() {
    afterNextRender(() => {
      this.isBrowser = true;
    });
  }
}
