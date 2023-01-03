import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';
import { FinalComponent } from './components/final/final.component';
import { UploadComponent } from './components/upload/upload.component';
import { WaitforresultComponent } from './components/waitforresult/waitforresult.component';

const routes: Routes = [
  {path:"",component:UploadComponent},
  {path:"components/config",component:ConfigComponent},
  {path:"components/waitforresult",component:WaitforresultComponent},
  {path:"components/final", component:FinalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
