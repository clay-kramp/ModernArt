import {Component, Input, OnInit} from '@angular/core';
import {InfoInterface} from '../infoInterface';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html'
})

export class DetailedCardComponent implements OnInit {
  constructor() { }
  @Input() info: InfoInterface;
  ngOnInit() {}
}
