import { Component, Input, Type } from '@angular/core';
import { WidgetType } from 'src/app/decorators/widget-type.decorator';
import { WidgetComponent } from '../../config/widget.component';


@Component({
  selector: 'hello-widget',
  templateUrl: './hello-widget.component.html',
  styleUrls: ['./hello-widget.component.scss']
})
@WidgetType("HelloWidgetComponent")
export class HelloWidgetComponent implements WidgetComponent {
  @Input() data: any;
}
