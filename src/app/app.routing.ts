import { RouterModule, } from "@angular/router";
import { CandidateComponent } from "./candidate/candidate.component";
import { CompanyComponent } from "./company/company.component";
import { HomeComponent } from "./home/home.component";

export const routing=RouterModule.forRoot([
    {path:'home',component:HomeComponent,
      children:[
          {path:'employees',component:HomeComponent},
          {path:'company',component:CompanyComponent},
          {path:"candidate",component:CandidateComponent},
          {path:"**",redirectTo: 'home', pathMatch:'full'}
  
      ]},
    
  ])


