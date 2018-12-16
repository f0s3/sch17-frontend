import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass']
})
export class NewsComponent implements OnInit {
  news:[];

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.get().subscribe(data => this.news = data['news']);
  }
}
