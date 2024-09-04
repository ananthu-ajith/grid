import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appFroaladir]',
  standalone: true,
})
export class FroaladirDirective {
  @Input('froalaEditor') editorOptions: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      // Initialize Froala editor here
      this.el.nativeElement.froalaEditor(this.editorOptions);
    }
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      // Destroy Froala editor instance here
      this.el.nativeElement.froalaEditor('destroy');
    }
  }
}
