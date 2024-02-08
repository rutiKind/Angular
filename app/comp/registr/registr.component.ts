
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { Person } from 'src/app/classes/Person';
import { Router } from '@angular/router';
import {  UsersServiceService } from 'src/app/service/Users-service.service';
import {NativeDateAdapter} from '@angular/material/core';
import {FloatLabelType} from '@angular/material/form-field';
import { Invitation } from 'src/app/classes/Invitation';
import { InvitationService } from 'src/app/service/invitation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent implements OnInit {
f:FormGroup=new FormGroup({ });
ngOnInit(): void {

  this.f = new FormGroup({
    email: new FormControl(null, [Validators.required, this.checkEmail()]),
    password: new FormControl(null, [Validators.required,this.checkPassword()]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required ]),
    first: new FormControl(null)
  });
}

floatLabelControl = new FormControl('auto' as FloatLabelType);
hide = true;
  constructor(private router: Router,private userService: UsersServiceService,private invitaionService:InvitationService) { }
  currentUser:Person=this.userService.currentUser;
  person: Person = new Person();

  
  send() {
    debugger
    console.log(this.f.value);
    //פרטי הרישום
    const data = {
      firstAidCertificate:this.f.value.firstAidCertificate,
      userPassword:this.f.value.password,
      userPhone:this.f.value.phone,
      userLastName:this.f.value.lastName,
      userFirstName:this.f.value.firstName,
      userEmail:this.f.value.email,
      userId:0
  };

  if (!this.OPEN) {
    this.OPEN=true
    }

  //עידכון משתמש
  else{
  if(this.userService.currentUser.userId){
     data.userId=this.currentUser.userId!;
     this.userService.updateUser(data).subscribe(
      succ=>{console.log("update");},
      err=>{console.log("no update");
      }
     )
     alert("The client has been updated successfully")
     this.router.navigate(['/Trips']);
    }

  //הוספת משתמש
  else{
      this.userService.addUser(data).subscribe(
        response => {
          console.log(response);
          if(response!=null)
          this.userService.currentUser=data
          alert("user register succefuly")
          this.router.navigate(['/Trips']);
        },
        error => {
          console.error(error);
        }
      );    
  }
  }
}
  get email() {
    return this.f.controls['email'];
  }

  get password() {
    return this.f.controls['password'];
  }

  get firstName() {
  return this.f.controls['firstName'];
  }

  get lastName() {
    return this.f.controls['lastName'];
  }

  get first() {
        return this.f.controls['first'];
  }

  get phone() {
    return this.f.controls['phone'];
 }

 //בדיקת תקינות למייל
  checkEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email && !emailRegex.test(email)) {
        return { Invalid: true };
      }
      return null;
    };
  }

  // בדיקת תקינות לסיסמא
  checkPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value;
      if (password && password.length < 8) {
        return { minlength: true };
      }
      return null;
    };
  }

  //בדיקת תקינות לפלפון
  checkPhone(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
          const phone = control.value;
          const number = /[0-9]/;
          if (phone && !number.test(phone)) {
            return { Invalid: true };
          } else if (phone.length < 7) {
            return { min: true };
          }
          return null;
        };
      }
 now=new Date()
 allInvitaion:Array<Invitation>=new Array<Invitation>

 //מחיקת משתמש
  remove(){
    debugger
     this.userService.getAllMyTrip(this.currentUser.userId!).subscribe(
      succ=>{this.allInvitaion=succ;console.log(this.allInvitaion);},
      err=>{console.log(err)}
      );
      this.allInvitaion.filter(x=>x.tripDate!<this.now)   
      if(this.allInvitaion)
      Swal.fire({
        icon: 'warning',
        title: `Unable to delete`,
        text: 'It is not possible to delete a customer who has trips that have not yet taken place',
        confirmButtonText: 'ERROR',
      });
     else
       debugger
        this.userService.deleteUser(this.currentUser.userId!).subscribe(
        succ=>{alert("delete");console.log("succes"); this.userService.currentUser=new Person()
        },
        err=>{console.log(err);
        }
      )
  }
  OPEN:boolean=false
  open(){
  }
}






