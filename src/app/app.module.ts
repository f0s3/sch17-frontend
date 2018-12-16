import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';

let routes:Routes = [
  { path: '', component: NewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'books', component: BooksComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    ScheduleComponent,
    TeachersComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
