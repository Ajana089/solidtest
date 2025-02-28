import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginobj:any={
    "userName":"",
    "password":""
  }
  

  masterserv=inject(MasterService)
 router=inject(Router);

  onlogin(){

  
     this.masterserv.userlogin(this.loginobj)
     .subscribe((res:any)=>{
      
      if(res.result== true){

        localStorage.setItem("soiluser",JSON.stringify(res.data))
         this.router.navigateByUrl("/dashboard")

      }

      else{
        alert(res.message);
      }

     })
  }

}
