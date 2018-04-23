import {RouterModule,Routes} from '@angular/router';
import { CmpViewComponent } from './cmp-view/cmp-view.component';
import { SendJobComponent } from './send-job/send-job.component';
import { CompaniesComponent } from './companies/companies.component';

const APP_ROUTES:Routes=[
    {path:"jobs",component:CmpViewComponent},
    {path:"comp",component:CompaniesComponent},
    {path:"employees",component:CmpViewComponent},
    {path:"sendJob",component:SendJobComponent},
];
export const ROUTING=RouterModule.forRoot(APP_ROUTES);