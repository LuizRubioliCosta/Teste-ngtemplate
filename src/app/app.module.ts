import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NgcontentinfoComponent } from './components/infos/ngcontentinfo.component';
import { NgcontentcheckComponent } from './components/check/ngcontentcheck.component';
import { NgcontentplansComponent } from './components/plans/ngcontentplans.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NgcontentinfoComponent,
    NgcontentcheckComponent,
    NgcontentplansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
