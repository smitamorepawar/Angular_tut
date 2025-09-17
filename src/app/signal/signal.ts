import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
x=20;
count=signal(10);

constructor(){
  effect(()=>{
    console.log(this.count());
  })
}

update(val:string)
{
  if(val=='inc')
  {
  this.count.set(this.count()+1);
 // this.x=this.x+1;
  }else{
    this.count.set(this.count()-1);
  }
}
}
