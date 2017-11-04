import { Component, OnInit, Input} from '@angular/core';
import {Router,ActivatedRoute  }  from '@angular/router';
import { AppService } from './app.component.service';

@Component({
  selector: 'userDetails',
  //template: `<div> This is an User Details</div> <button class="btn btn-primary" (click)="data()">View Todo</button>`,
  templateUrl:'userDetail.component.html',
  styleUrls: ['./app.component.css']
})
export class UserDetailsComponent implements OnInit {

    showTodo : boolean = false;
 id: number;
 userid;
  private sub: any;
  result ;
  updatedResult;
  i;
  subscription;
    constructor (private appService : AppService,public router: Router,private route : ActivatedRoute ){

  }

  
  ngOnInit(): void {
  this.sub = this.route.params.subscribe(params => {
       this.userid = + params['id']; 
    });
 //this.appService.getUserDetails(this.userid).subscribe(data => this.result = data);
  this.subscription = this.appService.getTodos(this.userid)
                                         .subscribe(res => this.result = res, 
                                                           error => console.log(error));

}
Click(id,status){
    console.log(id);
    console.log(status);
    this.appService.updateTodo(id,status).subscribe( data => this.updatedResult = data);
    console.log("Affter Put");
    console.log(this.updatedResult);
 
            if(this.result[this.userid].id =id){
            console.log(this.result[this.userid].id);
            console.log(id);
            this.result[this.userid].completed = false;
    }
        
}
data(){
    this.appService.getUserDetails(1).subscribe(data => this.result = data);
    this.showTodo = true;
    console.log(this.result)
}
}
