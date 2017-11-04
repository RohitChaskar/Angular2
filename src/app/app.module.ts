import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { RouterModule,Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './userDetails.component';
import { UserComponent } from './user.component';
import { AppService } from './app.component.service';

import { ClarityModule } from "clarity-angular";
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
   { path: 'userDetails/:id',  component: UserDetailsComponent },
  { path: 'user',  component: UserComponent },
   { path: '**', component: UserComponent }
 
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent
    //  TodoComponent
  ],
  imports: [
    BrowserModule,
     ClarityModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
