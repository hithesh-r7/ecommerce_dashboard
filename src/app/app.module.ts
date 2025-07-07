import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSoldComponent } from './components/products-sold/products-sold.component';
import { NetProfitComponent } from './components/net-profit/net-profit.component';
import { MonthlySalesComponent } from './components/monthly-sales/monthly-sales.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopcategoriesComponent } from './components/topcategories/topcategories.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { MaindashComponent } from './components/maindash/maindash.component';
import { NewuserComponent } from './components/newuser/newuser.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsSoldComponent,
    NetProfitComponent,
    MonthlySalesComponent,
    DashboardComponent,
    TopcategoriesComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    MaindashComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
