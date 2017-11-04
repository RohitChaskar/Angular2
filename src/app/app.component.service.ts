import { Injectable } from '@angular/core';
import { Http, Response ,RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable,ReplaySubject  } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
@Injectable()
export class AppService {
    url;
    _Todos;
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get(`http://jsonplaceholder.typicode.com/users`)
    .map((res:Response) => res.json());
  }
  getUserDetails(id) {
    return this.http.get(`http://jsonplaceholder.typicode.com/todos?userId=` + id)
    .map((res:Response) => res.json());
    
  }
getTodos(id){
    if(!this._Todos){
      this.url = 'http://jsonplaceholder.typicode.com/todos?userId='+ id;
      this._Todos = this.http.get(this.url)
                                   .map((res:Response) => res.json())
                                   .publishReplay(1)
                                   .refCount();
    }
    return this._Todos;
}

   updateTodo(id,status) {
       this.url = 'http://jsonplaceholder.typicode.com/todos/'+ id;
       let headers ;
       if(status){
       headers = new Headers({ 'completed': 'false' });
       }
       else{
         headers = new Headers({ 'completed': 'true' });
       }
        let options = new RequestOptions({ headers: headers });

    return this.http.put(this.url, options)
              .map((res:Response) => res.json());
              // .catch(this.handleErrorObservable);
  }
  private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
 

}