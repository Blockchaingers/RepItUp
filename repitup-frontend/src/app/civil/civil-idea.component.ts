import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-civil-idea',
  templateUrl: './civil-idea.component.html',
  styleUrls: ['./civil-idea.component.css'],
})
export class CivilIdeaComponent {

  @Input() id: Number = 0;
  @Input() description: Number;
  @Input() numTokens: Number = 0;
  @Input() userBalance: Number = 0;

  @Output() showFeasibility = new EventEmitter();

  constructor() { }

}
