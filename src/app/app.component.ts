import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngstyle';
  public name=false;
  public stringg= {
    'background-color':'black' ,
     'fontFamily': 'cooper',
    'color':'yellow'
   }
}
