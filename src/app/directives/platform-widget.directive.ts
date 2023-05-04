import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[platformWidget]'
})
export class PlatformWidgetDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
