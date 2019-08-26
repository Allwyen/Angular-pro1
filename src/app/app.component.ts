import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular-loginregister';
  getLuname='';
  getLpass='';

  onSubmit(data:NgForm)
  {
    console.log(data);
  }
}
