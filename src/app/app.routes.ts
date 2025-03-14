import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { SitesComponent } from './pages/sites/sites.component';
import { TesttypesComponent } from './pages/testtypes/testtypes.component';
import { TestsComponent } from './pages/tests/tests.component';

export const routes: Routes = [
    
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

},
{
    path:'login',
    component:LoginComponent
},

{
    path:'',
    component:LayoutComponent,
    children:[
        {
             path:'dashboard',
             component:DashboardComponent
        },
        {
            path:'user',
            component:UsersComponent
        },
        {
            path:'sites',
            component:SitesComponent
        },
        {
            path:'test-types',
            component:TesttypesComponent
            
        },
        {
            path:'tests',
            component:TestsComponent
        }

    ]
    
}
];
