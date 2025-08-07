import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { Display } from './display/display';

@Component({
  selector: 'app-root',
  imports: [Login,Signup,Profile,Display],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'code step by step';

  // name='Smita More';
  // lang='Angular';
  //  x=12;
  //  y=89;
  //  user1="saiee";
  //  user2="sharvil";

  handleClickEvent()
  {
    console.log("FunctionButton Called....");
  }

  buttonClickEvent()
  {
    console.log(" FunctionButton Start called...");
    this.otherFunction();
  }

  otherFunction()
  {
   console.log("__Other__")
  }

  name:string="Smita";  //it takes string only 
  roll:number=45    //it takes number only
  email:string|number="swarali" //it takes string and number only
  other:any=true //it takes any datatype of value
  updated()
  {
 this.name="saiee";
 this.roll=90;
 this.email=24;
 this.other="samarth";
 this.other={};
 this.other=78;

  }
  updatedVar()
  {
    let x=56; //let only used in method
    console.log(x);
    
  }
  sum(a:number,b:number)
  {
    console.log(a+b);
  }
}
