import { Component, OnInit } from '@angular/core';
import { WidgetService } from './services/widget.service';
import { WidgetRegistration } from './config/widget-registration';
import { tap, first, Observable, switchMap, single } from 'rxjs';
import { WidgetComponent } from './config/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  widget!: Observable<WidgetRegistration>;
  constructor(private widgetService: WidgetService) {
  }

  ngOnInit(): void {
    this.widget = this.widgetService.getWidgets().pipe(single(), tap((res) => console.log(res)), switchMap((res) => res));

    this.widgetService.getWidgetsFromApi()
    .subscribe(x => console.log(x));
  }
}
