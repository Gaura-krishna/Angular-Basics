import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  array=[
    {
      name:"krishna",
      id:"1",
      rollnumber:"01"
    },
    {
      name:"venkat",
      id:"2",
      rollnumber:"25"
    },{
      name:"raghav",
      id:"3",
      rollnumber:"80"
    },{
      name:"pavan",
      id:"4",
      rollnumber:"12"
    },{
      name:"mahesh",
      id:"5",
      rollnumber:"69"
    },{
      name:"rahul",
      id:"6",
      rollnumber:"5"
    },{
      name:"krish",
      id:"7",
      rollnumber:"4"
    },
  ]

}
