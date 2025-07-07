import { Component } from '@angular/core';
import { User } from '../../user';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrl: './newuser.component.css'
})

export class NewuserComponent {

  topics=['Vue','react'];
  userModel= new User("hithesh","hit@gmail.com",1234567890,"",false);

  

  onSubmit(){
    console.log(this.userModel)
    
  }
  



}
