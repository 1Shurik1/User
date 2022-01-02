import { Component, OnInit } from '@angular/core';
import { interService } from '../user.service';
interface User {
  _id:string;
  age:number;
  address:string;
  company:string;
  email:string;
  name:string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [interService]
})


export class UserComponent implements OnInit {
  user:User[]=[];
  //user:User = null
  constructor(private userSrvice:interService) { }
  
  ngOnInit(): void {
    this.user = this.userSrvice.getUss();
    //this.user = 
  }
}
