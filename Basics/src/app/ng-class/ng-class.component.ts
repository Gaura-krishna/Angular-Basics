import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {

  styleClassProps='variable-props'

  conditionstyle='conditional-props'



  stylemethod(){
    return 'class-Method';
  }
}
