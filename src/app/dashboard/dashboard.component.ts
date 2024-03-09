import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  selected: Date | null= new Date();

  menuSlide:boolean=true

  employeeCount:any=0

  AdminUserName:any=""

  // create a variable for sharing
  date:any=Date()

  constructor(private us:UserService, private route:Router){}
ngOnInit(): void {
  this.us.getUser().subscribe((result:any)=>{
    // console.log(result.length)
    this.employeeCount=result.length
  })

 this.AdminUserName= localStorage.getItem("Username")
  
}
 
menuClick(){
  this.menuSlide=!this.menuSlide
}

logout(){
  localStorage.removeItem("Username")
  this.route.navigateByUrl("")
}

updatedAdmin(event:any){
  this.AdminUserName=event
}
}
