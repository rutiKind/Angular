import { Component, OnInit } from '@angular/core';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { Person } from 'src/app/classes/Person';
import { UsersServiceService } from 'src/app/service/Users-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  users=new Array<Person>();

  constructor(private userService: UsersServiceService) { }

  ngOnInit(): void {
    debugger
    this.userService.getAllUser().subscribe(
      succ => { this.users = succ; console.log(this.users); },
      err => { console.log(err); }
    );
  }
}
