import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
name=""
displayName=""
getName(event:Event)
{
  this.name=(event.target as HTMLInputElement).value
  
}
showName()
{
  this.displayName=this.name;
}
setName()
{
  this.name="Smita";
}
}
