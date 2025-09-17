import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [],
  templateUrl: './switch-case.html',
  styleUrl: './switch-case.css'
})
export class SwitchCase {
color='red';

handleColor(val:string)
{
  this.color=val;
}
handleInput(event:Event)
{
  this.color=(event.target as HTMLInputElement).value;
}
}
