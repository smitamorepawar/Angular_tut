import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-stat',
  imports: [],
  templateUrl: './if-else-stat.html',
  styleUrl: './if-else-stat.css'
})
export class IfElseStat {
display=true;

num=19;
show()
{
  this.display=true;
}
hide()
{
  this.display=false;
}
toggle()
{
  this.display=!this.display;
}
}