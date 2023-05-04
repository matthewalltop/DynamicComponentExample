import { Type } from '@angular/core';

export const widgetTypeMap: Map<string, Type<{}>> = new Map<string, Type<{}>>();

export function getType(componentType: string) {
  return (target: any) => { widgetTypeMap.set(componentType, <Type<{}>>target); };
}

// function activator<T extends IActivatable>(type: { new(): T ;} ): T {
//   return new type();
// }

export class WidgetFactory<T> {
  constructor(private context: Object) {}

  getInstance(name: string, ...args: any[]) {
    let instance = Object.create((this.context as any)[name].prototype);
    instance.constructor.apply(instance, args);
    return <T>instance;
  }
}
