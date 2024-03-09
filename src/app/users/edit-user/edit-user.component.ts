import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userService/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  id:any=""
  userData:any={}

  constructor(private ar:ActivatedRoute, private us:UserService, private route:Router){}

ngOnInit(): void {
 this.ar.params.subscribe((data:any)=>{
  // console.log(data);
  this.id=data.id
  // console.log(this.id);

  // api

  this.us.getUserData(this.id).subscribe((response:any)=>{
    // console.log((response));
    this.userData=response

    // console.log(this.userData);
    
  }) 
  
 })
}

updateData(){
this.us.updateUser(this.id,this.userData).subscribe((response:any)=>{

  this.route.navigateByUrl("/users")
})
}
}
