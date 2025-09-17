import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  imports: [],
  templateUrl: './else-if.html',
  styleUrl: './else-if.css'
})
export class ElseIf {

   color=2;
   handlecolor(val:number)
   {
      this.color=val;
   }
   handleinput(event:Event)
   {
      console.log(parseInt((event.target as HTMLInputElement).value));
       this.color=parseInt((event.target as HTMLInputElement).value);
   }
}
