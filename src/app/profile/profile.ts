
import { Component } from "@angular/core";

@Component({
    selector:'app-profile',
    // template:`<h3>Profile Component</h3>`,
    // styles:'h3{color:green}'
    templateUrl:'./profile.html',
    styleUrl:'./profile.css'
    

})

export class Profile
{
    handleEvent(event:MouseEvent)
    {
        console.log("-Click Event Called-",(event.target as Element).classList);
        console.log("Click Event",event.type)
    }

    handleBoxEvent(event:MouseEvent)
    {
        console.log("Box event",event.target);
    }

    handleTextEvent(event:Event)
    {
        console.log("Text Event called..");
        //console.log("value",(event.target as HTMLInputElement).value);
    }
    textwriteEvent(event:Event)
    {
        console.log("value",(event.target as HTMLInputElement).value);
    }

    handleFocus(event:Event)
    {
        console.log("Focus called");
    }
    handleBlur(event:Event)
    {
        console.log("Blur called");
    }
}