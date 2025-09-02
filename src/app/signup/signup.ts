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
email=""
displayEmail=""
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
getEmail(event:Event)
{
  this.email=(event.target as HTMLInputElement).value
}
shwEmail()
{
this.displayEmail=this.email
}
setEmail()
{
  this.email="smita@gmail.com";
}
}
