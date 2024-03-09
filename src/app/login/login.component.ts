import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

email:any=""
  // create model for login

  loginFormModel=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })

  constructor(private fb:FormBuilder, private as:AdminService, private route:Router){}
  ngOnInit(): void {
    
  }

  login(){
    // for simplifying we use the variables
    var path=this.loginFormModel.value //name of model and the property value
    var email=path.email
    var pswd=path.pswd

    this.email=email

    // total from validation checking

    if(this.loginFormModel.valid){
      // console.log(email);
      // console.log(pswd);  
      // alert('valid form')
      this.as.loginApi().subscribe((data:any)=>{
        var adminPassword=data[0].password
        var adminEmail=data[0].email
        console.log(adminEmail);
        console.log(adminPassword);
        if(email==adminEmail){
          if(pswd==adminPassword){

            // alert('login success')

            // admin@gmail.com ==> admin

            var index=this.email.indexOf('@')
            // console.log(this.email.slice(0,index));
            localStorage.setItem("Username",this.email.slice(0,index))
            
            this.route.navigateByUrl('home')
          }
            else{
              alert('Incorrect password for admin')
            }
            
          }
          else{
              alert('Incorrect email for admin')
          }
        }
        
      )
      
    }
    else{
      alert('invalid form')
    }
   
    
  }

}
