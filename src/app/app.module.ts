import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { HelloWidgetComponent } from './components/hello-widget/hello-widget.component';
import { PlatformWidgetDirective } from './directives/platform-widget.directive';
import { NumbersWidgetComponent } from './components/numbers-widget/numbers-widget.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WidgetContainerComponent,
    HelloWidgetComponent,
    PlatformWidgetDirective,
    NumbersWidgetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
