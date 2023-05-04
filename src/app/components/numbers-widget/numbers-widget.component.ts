import { Component, Input } from '@angular/core';
import { WidgetType } from 'src/app/decorators/widget-type.decorator';
import { WidgetComponent } from '../../config/widget.component';

@Component({
  standalone: true,
  selector: 'numbers-widget',
  templateUrl: './numbers-widget.component.html',
  styleUrls: ['./numbers-widget.component.scss']
})
@WidgetType("NumbersWidgetComponent")
export class NumbersWidgetComponent implements WidgetComponent {
  @Input() data: any;
}
