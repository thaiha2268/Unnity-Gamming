import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashoutConfirmComponent } from './cashout/cashout-confirm/cashout-confirm.component';
import { CashoutHomeComponent } from './cashout/cashout-home/cashout-home.component';
import { CashoutInputComponent } from './cashout/cashout-input/cashout-input.component';
import { CashoutOptionComponent } from './cashout/cashout-option/cashout-option.component';
import { HomeComponent } from './home/home.component';
import { PincodeComponent } from './pincode/pincode.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';
import { SelectlanguageComponent } from './selectlanguage/selectlanguage.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  // { path: '**', component: HomeComponent },
  { path: '', component: ScreensaverComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pincode', component: PincodeComponent },
  { path: 'screensaver', component:  ScreensaverComponent},
  { path: 'language', component: SelectlanguageComponent },
  { path: 'tranfers', component: TransfersComponent },
  { path: 'cashout-home', component: CashoutHomeComponent },
  { path: 'cashout-option', component: CashoutOptionComponent },
  { path: 'cashout-input', component: CashoutInputComponent },
  { path: 'cashout-confirm', component: CashoutConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
