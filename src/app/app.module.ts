import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ArticlesComponent } from './articles/articles.component';
import { ButtonComponent } from './button/button.component';
import { StylePageComponent } from './style-page/style-page.component';
import { CardComponent } from './card/card.component';
import { SpecificStyleComponent } from './specific-style/specific-style.component';
import { DetailedCardComponent } from './detailed-card/detailed-card.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ArticlesComponent,
    ButtonComponent,
    StylePageComponent,
    CardComponent,
    SpecificStyleComponent,
    DetailedCardComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR,
      disableConsoleLogging: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
