import { Component, OnInit,} from '@angular/core';
import {Router }  from '@angular/router';
import { AppService } from './app.component.service';

@Component({
  selector: 'app-root',
  template:`
  <!--nav class="subnav">
      
     <a routerLink="/user" routerLinkActive="active">Users</a
      <a routerLink="/userDetails" routerLinkActive="active">Todo</a>
     </nav-->
   <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//   result : {};
//   constructor (private appService : AppService,public router: Router){

//   }

  
  ngOnInit(): void {
//this.appService.getUser().subscribe(data => this.result = data);
  
}
// Click(id){
//  //  this.appService.getUser().subscribe(data => this.result = data);
//   console.log(id);
//   this.router.navigate(['./todo']);
// }
}
