import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiResponse, user, UserList } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  userobj: user=new user();
  masterSrv= inject(MasterService);

  isNewFormVisible=signal<boolean>(false);
  userList:UserList []=[];

  ngOnInit(): void {
      this.loadUsers();
  }
  showHideForm(){
    this.isNewFormVisible.set(!this.isNewFormVisible())


}

loadUsers(){
  this.masterSrv.getAllUsers().subscribe((res:ApiResponse)=>{

    this.userList=res.data;

  })
}

onAdduser(){

  this.masterSrv.createUser(this.userobj).subscribe((res:ApiResponse)=>{
    if(res.result){
      alert("user created succes")
      this.loadUsers();
    }
    else {
      alert(res.message)
    }
  })


}
onEdit(data:user){
  this.userobj=data;
  this.showHideForm();

}

Updateuser(){

  this.masterSrv.updateUser(this.userobj).subscribe((res:ApiResponse)=>{
    if(res.result){
      alert("user update succes")
      this.loadUsers();
    }
    else {
      alert(res.message)
    }
  })


}
onDelete(id:number){

  const isDelete=confirm("are u want to delete")
  if(isDelete== true)
  {
    this.masterSrv.DeleteUserbyId(id).subscribe((res:ApiResponse)=>{
      if(res.result){
        alert("user delete succes")
        this.loadUsers();
      }
      else {
        alert(res.message)
      }
    })
  }

}


}


