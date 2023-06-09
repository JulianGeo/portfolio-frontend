import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  isLoggedIn(): boolean{
    //console.log(("the state is:" +this.userService.getState()));
    return true;
  }

}
