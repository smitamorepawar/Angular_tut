import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.html',
  //styleUrl: './display.css'
  styleUrls:['./display.css','./btn.css']
})
export class Display {

  count=0

  // handleIncrement()
  // {
  //   this.count=this.count+1;
  // }

  // handleDecrement()
  // {
  //   this.count=this.count-(1);
  // }

  // handleReset()
  // {
  //   this.count=0;
  // }

  handleCounter(val:string)
  {
    if(val=='minus')
    {
    
      this.count=this.count-1;
    }
    else if(val=='plus')
    {
      this.count=this.count+1;
    }
    else{
      this.count=0;
    }
  }

}
