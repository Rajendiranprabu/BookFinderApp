import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { ExprestComponent } from './exprest/exprest.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    BookCategoryComponent,
    BookComponent,
    ExprestComponent,
    CustomersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
