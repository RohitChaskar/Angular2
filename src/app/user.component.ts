import { Component, OnInit,} from '@angular/core';
import {Router }  from '@angular/router';
import { AppService } from './app.component.service';

@Component({
  selector: 'user',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class UserComponent implements OnInit {
  result : {};
  result1;
  constructor (private appService : AppService,public router: Router){

  }

  
  ngOnInit(): void {
this.appService.getUser().subscribe(data => this.result = data);
  

}
Click(id){
 //  this.appService.getUser().subscribe(data => this.result = data);

  console.log(this.result1);
 this.router.navigate(['userDetails', id]);
}
}
