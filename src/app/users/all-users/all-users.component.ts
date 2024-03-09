import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService/user.service';
import jsPDF from 'jspdf';
import  autoTable from 'jspdf-autotable';
import { count } from 'rxjs';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  userList: any = []
  userName:string=""
  filterData:any=""
  sortData:any=""
  p: number = 1;
  
  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.getUser()

  }

  changeFilterData(data:any){
    this.filterData=data
  }

  changeSortData(){
    this.sortData="sort"
  }

  getUser() {

    this.us.getUser().subscribe((data: any) => {
      this.userList = data
      console.log(this.userList);
      
    })

  }

  removeUser(id:any){

    this.us.deleteUser(id).subscribe((result:any)=>{
      // console.log((data));
      alert('user removed')
      this.getUser()
      
    })
  }

  convertPdf(){

    let pdf=new jsPDF
    // setting headings for table
    let head=[["User Id","Name","Email","Status"]]

    // setting body [{},{},.........]=>[[],[],.......[]]
    let body:any=[]
    this.userList.forEach((i:any)=>{
      body.push([i.id,i.name,i.email,i.status==1?'Active':'Inactive'])
    
    })

    pdf.setFontSize(16)
    pdf.text("Users Directory",15,10)

    // generate table

    autoTable(pdf,{head,body})

    // open in new window

    pdf.output('dataurlnewwindow')

    // auto dwd

    pdf.save('UserData.pdf')
  }

}
