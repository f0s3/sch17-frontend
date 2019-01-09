import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

let routes:Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'books', component: BooksComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin', component: AdminComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    ScheduleComponent,
    TeachersComponent,
    BooksComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
