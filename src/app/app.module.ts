import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CmpItemHeaderComponent } from './cmp-item-header/cmp-item-header.component';
import { CmpViewComponent } from './cmp-view/cmp-view.component';
import { CmpItemViewComponent } from './cmp-item-view/cmp-item-view.component';
import { ROUTING } from './app.routing';
import { CompaniesComponent } from './companies/companies.component';
import { SendJobComponent } from './send-job/send-job.component';
import { TrabajosService } from './trabajos.service';


@NgModule({
  declarations: [
    AppComponent,
    CmpItemHeaderComponent,
    CmpViewComponent,
    CmpItemViewComponent,
    CompaniesComponent,
    SendJobComponent
  ],
  imports: [
    BrowserModule,
    ROUTING
  ],
  providers: [
    TrabajosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
