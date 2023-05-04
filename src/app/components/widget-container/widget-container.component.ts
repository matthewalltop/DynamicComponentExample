import { AfterContentInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PlatformWidgetDirective } from '../../directives/platform-widget.directive';
import { WidgetComponent } from '../../config/widget.component';
import { WidgetRegistration } from '../../config/widget-registration';


@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() widget!: WidgetRegistration | null;

  @ViewChild(PlatformWidgetDirective, { static: true }) platformWidget!: PlatformWidgetDirective;

  constructor(){}

  ngOnInit(): void {
    this.initializeWidget();
  }

  ngOnDestroy(): void {
  }

  ngAfterContentInit(): void {
  }

  initializeWidget(): void {
    const viewContainerRef = this.platformWidget.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<WidgetComponent>(this.widget?.component!);
    componentRef.instance.data = this.widget?.data;
  }

}
