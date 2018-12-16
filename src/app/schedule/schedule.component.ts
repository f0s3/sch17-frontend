import { Component, OnInit, Input } from '@angular/core';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {
  weekdays: string[];
  schedule: {};

  constructor(public scheduleService:ScheduleService) { }

  ngOnInit() {
    this.scheduleService.get().subscribe(data => {
      this.weekdays = Object.keys(data['schedule']);
      this.schedule = data['schedule'];
    });
  }

}
