import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Person } from 'src/app/classes/Person';
import { Router } from '@angular/router';
import {  UsersServiceService } from 'src/app/service/Users-service.service';
import Swal from 'sweetalert2';
// import swal from "sweetalert"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {

    this.f = new FormGroup({
      'email': new FormControl(null, [Validators.required])
     ,'password': new FormControl(null,[Validators.required])
    });
  }

  f: FormGroup = new FormGroup({ });
  hide = true;
  constructor(private router: Router,private  userService: UsersServiceService) { }

  person: Person = new Person();
  send() {
    const email = this.email.value; 
    const password = this.password.value;
    debugger
    const localMan = localStorage.getItem('Manager')
    const myManager = JSON.parse(localMan!);
    console.log(myManager);
    
    //בדיקה האם הלקוח הוא מנהל
    if(email==myManager.userEmail && myManager.userPassword==password){
      this.userService.manager.userEmail=myManager.userEmail;
      this.userService.manager.userPassword=myManager.password
      this.userService.currentUser=new Person()
      console.log(this.userService.manager.userPassword);
      console.log(this.userService.manager);
      Swal.fire({
        icon: 'success',
        title: `Hello Manager`,
        text: 'You have successfully logged in.',
        confirmButtonText: 'OK'
      });
      this.router.navigate(['/Trips'])
    }

    //בדיקה האם הלקוח קיים ברשימת הלקוחות 
    else{
    this.userService.checkLogin(email, password).subscribe(
      (user) => {
        console.log(user);
        if(user!=null){
          debugger
            this.userService.currentUser=user
            this.userService.currentUser.userId=user.userId
            this.userService.manager=new Person()
            console.log(this.userService.currentUser);   
            Swal.fire({
              icon: 'success',
              title: `Hello ${this.userService.currentUser.userFirstName}`,
              text: 'You have successfully logged in.',
              confirmButtonText: 'OK'
            });            this.router.navigate(['/Trips'])
        }
        else{
          console.log("error");
          Swal.fire({
            icon: 'error',
            title: `Invalid email or password`,
           // text: 'You have successfully logged in.',
            confirmButtonText: 'ERROR'
          });
        }
      },
      (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: `Invalid email or password`,
         // text: 'You have successfully logged in.',
          confirmButtonText: 'ERROR'
        });
      }
    );
  }
  }
  get email() {
    return this.f.controls['email']
  }

  get password(){
     return this.f.controls['password']
  }

}