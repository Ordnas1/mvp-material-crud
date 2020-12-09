import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-ui',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() sidenavOpened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
