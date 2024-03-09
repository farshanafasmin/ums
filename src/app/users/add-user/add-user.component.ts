import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../userService/user.service';
import { ToastService } from 'src/app/service/toast.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  userModel=this.fb.group({
    name:['',[Validators.required,Validators.pattern('^[A-Za-z ]+$')]],
    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    status:['',[Validators.required]]

  })

  constructor(private fb:FormBuilder, private us:UserService , private toast:ToastService){}

ngOnInit(): void {
    
}

addUser(){
  
  if(this.userModel.valid){
    // alert('valid form')
    var path=this.userModel.value 
  var name=path.name
  var email=path.email
  var status=path.status
  // console.log(name);
  // console.log(email);
  // console.log(status);
  this.us.addUser({id:"",name:name,email:email,status:status}).subscribe((response:any)=>{
    // console.log(response);
    // alert(`${response.name} details added`)
    this.toast.showSuccess(`${response.name} details added`)
    // reset the form

    this.userModel.reset()
    
  })
  }
  else{
    alert('invalid form')
  }
 
}
  
}
