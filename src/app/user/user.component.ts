import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomElement = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {

    selectedItem = DUMMY_USERS[randomElement];
    age = "Henry"
    changeValue(){
      console.log("name button clicked")
    }
}
