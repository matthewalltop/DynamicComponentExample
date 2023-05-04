import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map } from 'rxjs';
import { WidgetRegistration } from '../config/widget-registration';
import { HelloWidgetComponent } from '../components/hello-widget/hello-widget.component';


@Injectable({
  providedIn: 'root'
})
export class WidgetService {

  constructor(private httpClient: HttpClient) { }

  public getWidgetsFromApi(): Observable<WidgetRegistration[]> {
    return this.httpClient.get<WidgetRegistration[]>('/api/widgets');
  }

  public getWidgets(): Observable<WidgetRegistration[]> {
    return of([
      new WidgetRegistration(HelloWidgetComponent, { message: "Hello from the Hello Widget"})
    ]);
  }
}
