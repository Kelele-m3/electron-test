import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartUpPageComponent } from './start-up-page/start-up-page.component';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StartUpPageComponent,
    TextEditorComponent
  ],
  providers: [],
  bootstrap: [StartUpPageComponent]
})
export class AppModule { }
