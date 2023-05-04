import { WidgetComponent } from '../config/widget.component';

export function WidgetType (widgetName: string) {
  return (ctor: Function) => {};
}
