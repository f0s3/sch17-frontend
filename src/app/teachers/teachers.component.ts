import { Component, OnInit } from '@angular/core';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.sass']
})
export class TeachersComponent implements OnInit {
  teachers:[];

  constructor(private teachersService:TeachersService) { }

  ngOnInit() {
    this.teachersService.get().subscribe(data => this.teachers = data['teachers']);
  }

}
