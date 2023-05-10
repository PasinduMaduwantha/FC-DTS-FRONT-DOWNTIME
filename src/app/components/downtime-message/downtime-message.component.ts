import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downtime-message',
  templateUrl: './downtime-message.component.html',
  styleUrls: ['./downtime-message.component.scss']
})
export class DowntimeMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navigateToFCHome() {
    window.location.href = 'https://firstcapital.lk';
  }
}
