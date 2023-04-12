import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})


export class TestComponent implements OnInit {
  constructor() {}

  @Input() parentData: any;

  @Output() childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hey CodeEvolution');
  }

  ngOnInit(): void {}
}
