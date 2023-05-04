import { Type } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { Store } from './store';
export class WidgetRegistration {
  constructor(public component: Type<WidgetComponent>, public data: any) {}
}


export class DynamicWidget {
  constructor(public className: string, opts: any) {
    if(Store[className] === 'undefined' || Store[className] === null) {
      throw new Error(`Widget of type ${className} not registered`);
    }
    return new Store[className](opts);
  }
}
