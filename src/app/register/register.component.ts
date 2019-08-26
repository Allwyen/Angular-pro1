import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  getRname='';
  getRaddress='';
  getRgender='';
  getRdob='';
  getRdistrict='';
  getRplace='';
  getRmobile='';
  getRemail='';
  getRuname='';
  getRpass='';
  getRcpass='';

  onSubmit(data:NgForm)
  {
    this.getRpass=data.value.rpass;
    console.log(this.getRpass);
    this.getRcpass=data.value.rcpass;
    console.log(this.getRcpass);
    
    if(this.getRpass==this.getRcpass)
    {
      console.log("Passwords Match")
    }
    else
    {
      console.log("Password doesn't match")
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
