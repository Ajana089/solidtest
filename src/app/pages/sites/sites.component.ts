import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { ApiResponse } from '../../models/model';

@Component({
  selector: 'app-sites',
  imports: [ReactiveFormsModule],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {

  isNewFormVisible:boolean= false;
mastersrv=inject(MasterService)

  siteForm:FormGroup=new FormGroup({
    siteId:new FormControl(0),
    siteName:new FormControl(""),
    location:new FormControl(""),
    clientName:new FormControl(""),
    weatherConditions:new FormControl(""),
    createdDate:new FormControl(new Date())

   
  })

  changeView(){
    this.isNewFormVisible = !this.isNewFormVisible;
  }

  onSave(){
    const formValue=this.siteForm.value;
    this.mastersrv.createNewSite(formValue).subscribe((Res:ApiResponse)=>{
      alert("sitecreated")
    },error=>{
      alert("error from api")
    });
    

  }


}
