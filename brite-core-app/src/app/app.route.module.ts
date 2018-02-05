import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {InsurersComponent} from "./insurers/insurers.component";
import {RiskTypesComponent} from "./insurers/risk-types/risk-types.component";
import {SubscribeComponent} from "./insurers/subscribe/subscribe.component";
/**
 * Created by ebuka on 04/02/18.
 */


const appRoutes: Routes = [
  // {path: '', redirectTo:  '/home', pathMatch: 'full'},
  {path: '', component:InsurersComponent},
  {path: 'new-risk-type', component:RiskTypesComponent},
  {path: 'subscribe/:id', component:SubscribeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
