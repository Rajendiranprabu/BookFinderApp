import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookCategoryComponent } from './book-category/book-category.component';
import { ExprestComponent } from './exprest/exprest.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {
    path: 'books', component: BookComponent
  },
  {
    path: 'books/:id', component: BookComponent
  },
  {
    path: 'books/:id/:author', component: BookComponent
  },
  {
    path: 'category', component: BookCategoryComponent
  },
  {
    path: 'restModule', component: ExprestComponent
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'customers', component: CustomersComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
