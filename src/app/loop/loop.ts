import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
  styleUrl: './loop.css'
})
export class Loop {
name=["Smita","Swapnil","Saiee","Sharvil"]
students=[
{stuName:'Saiee',age:11,email:'sai@gmail.com'},
{stuName:'Samarth',age:14,email:'sam@yahoo.com'},
{stuName:'Shreeja',age:10,email:'pari@link.com'},
{stuName:'Sharvil',age:7,email:'sha@jira.com'},
{stuName:'Pari',age:7,email:'shree@monster.com'}
]

getname(stuname:string)
{
  console.log(stuname);
}
}
