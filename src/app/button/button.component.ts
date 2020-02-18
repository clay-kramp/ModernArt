import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  constructor() { }
  @Input() text: string;

  ngOnInit() {
  }

}
