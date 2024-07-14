import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactGridWrapperComponent } from './react-grid-wrapper/react-grid-wrapper.component';
import { ReactDropdownWrapperComponent } from './react-dropdown-wrapper/react-dropdown-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactGridWrapperComponent,
    ReactDropdownWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
