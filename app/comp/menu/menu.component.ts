import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/classes/Person';
import { UsersServiceService } from 'src/app/service/Users-service.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private  userService: UsersServiceService) { }
  ngOnInit(): void {
    this.f = new FormGroup({
      'currentUser': new FormControl(null, [Validators.required])  }
      
   ) }
  f: FormGroup = new FormGroup({ });


  get currentUser(){
    return this.userService.currentUser;
  }
  get manager(){
    return this.userService.manager;
  }
}
