import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  masterserv= inject(MasterService);
  router=inject(Router)
  logout(){
    localStorage.removeItem("soiluser");
    this.router.navigate(['/login'])


  }

}
