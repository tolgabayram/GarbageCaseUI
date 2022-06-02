import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GarbagerecordComponent } from './garbagerecord/garbagerecord.component';
import { ShowGarbagerecordComponent } from './garbagerecord/show-garbagerecord/show-garbagerecord.component';
import { AddEditGarbagerecordComponent } from './garbagerecord/add-edit-garbagerecord/add-edit-garbagerecord.component';
import  {GarbagerecordApiService} from './garbagerecord-api.service';
import { I18nModule } from './i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    GarbagerecordComponent,
    ShowGarbagerecordComponent,
    AddEditGarbagerecordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
