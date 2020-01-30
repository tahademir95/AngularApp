import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
