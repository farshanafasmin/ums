import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {

  admin:any={}

  fileData:any=""

  // create an event and use @output decorator for sharing the event to parent

  @Output() onAdminChange=new EventEmitter()

  // create a variable for receiving the shared data

  @Input() data:any

  constructor(private as:AdminService , private toast:ToastService){}
  
  profilePic:any="https://i.postimg.cc/rmctTYmM/2919906.png"

  editClicked:any=false


  

ngOnInit(): void {

  this.as.loginApi().subscribe((result:any)=>{
    this.admin=result[0]
    if(this.admin.profile){
      this.profilePic=this.admin.profile
    }
  })
  
}

editClick(){
  this.editClicked=true
}

cancelEdit(){
  this.editClicked=false
}

getFile(event:any){

  let file=event.target.files[0]

  // url conversion

  let fr=new FileReader()

  // covert

  fr.readAsDataURL(file)

  // store the coverted url(onload)

  fr.onload=(event:any)=>{
    console.log(event.target.result);

    // preview
    this.profilePic=event.target.result
    this.admin.profile=this.profilePic
    console.log(this.admin);
    
    
  }

}

editAdmin(){
  this.as.updateAdmin(this.admin).subscribe((result:any)=>{
    console.log(result);
    
    // updating local storage with new username
    var index=result.email.indexOf('@')
    localStorage.setItem("Username",result.email.slice(0,index))


    // use the event and pass the value to parent

    this.onAdminChange.emit(result.email.slice(0,index))

    this.cancelEdit()
    this.toast.showSuccess('Admin Upadted Successfully')
  })
}
}
