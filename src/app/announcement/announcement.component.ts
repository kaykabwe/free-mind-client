import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  array = [
    'This is anouncement soon to able functional',
    'We have reached 50 members in the year 2021',
    'Total wealth accumalated is now approaching 200 000ZMW'
  ];

  effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }

}
