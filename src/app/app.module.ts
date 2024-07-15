import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSoldComponent } from './components/products-sold/products-sold.component';
import { NetProfitComponent } from './components/net-profit/net-profit.component';
import { NewCustomersComponent } from './components/new-customers/new-customers.component';
import { OverallCustomersComponent } from './components/overall-customers/overall-customers.component';
import { ProductsSalesComponent } from './components/products-sales/products-sales.component';

import { MonthlySalesComponent } from './components/monthly-sales/monthly-sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopcategoriesComponent } from './components/topcategories/topcategories.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsSoldComponent,
    NetProfitComponent,
    NewCustomersComponent,
    OverallCustomersComponent,
    ProductsSalesComponent,
    
    MonthlySalesComponent,
    DashboardComponent,
    TopcategoriesComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
