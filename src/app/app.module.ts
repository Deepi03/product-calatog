import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';

import { HttpClientModule } from '@angular/common/http';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { PhonesPipe}  from './product-display/phone.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductDetailsComponent,
    FilterTextboxComponent,
    PhonesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    OrderModule,
    FilterPipeModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
