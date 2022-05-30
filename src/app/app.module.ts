import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { NgcontentinfoComponent } from './component/ngcontentinfo/ngcontentinfo.component';
import { NgcontentcheckComponent } from './component/ngcontentcheck/ngcontentcheck.component';
import { NgcontentplansComponent } from './component/ngcontentplans/ngcontentplans.component';

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
