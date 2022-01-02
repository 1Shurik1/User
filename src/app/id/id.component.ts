import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { interService } from '../user.service';
interface User {
  _id:string;
  picture:string;
  balance:string;
  phone:string;
  about:string;
  age:number;
  address:string;
  company:string;
  email:string;
  name:string;
  registered:string;
  tags:string[];
}
@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css'],
})
export class IdComponent implements OnInit {
  id:string = "";
  id_user:string = "";


  user:User = interService.getUs(interService.findUser(this.id_user));
  private subscription:Subscription;
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    this.id_user = this.id.slice(3, this.id.length);
    this.user = interService.getUs(interService.findUser(this.id_user));
    for(let index = 1; index < this.user.tags.length; index++) {
      this.user.tags[index] = " " + this.user.tags[index]
    }
   }
  ngOnInit(): void {  
  }

}
