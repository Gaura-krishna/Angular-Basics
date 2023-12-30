import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// One Way DataBinding


  /* Interpolation starts */
  interpolationVariable = 'This is a the Interpolation where we use {{ }} in between of them, we have place the variable which we want display on screen';
  /* Interpolation end */

  /* Property Binding starts */
  PropertyBinding = 'This is a the Property Binding where we can pass the data to the html propety';
  /* Property Binding end */

  /* Attribute Binding starts */
  colval='2'
  /* Attribute Binding end */

   /* Event Binding starts */
   text:string=''

   data(inputtext:string){
    this.text=inputtext
    console.log(this.text)
   }
   /* Event Binding end */

//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Two Way DataBinding
username:string='';
// input=()=>{console.log(this.username)}
}
