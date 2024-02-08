import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
      debugger
      const manager = JSON.stringify({ userEmail: "ruti@gmail.com", userPassword: "ruti123" })
      localStorage.setItem('Manager', manager)  }
  title = 'project';
}
