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
import { TranferCheckComponent } from './tranfer/tranfer-check/tranfer-check.component';
import { TranferConfirmComponent } from './tranfer/tranfer-confirm/tranfer-confirm.component';
import { TranferHomeComponent } from './tranfer/tranfer-home/tranfer-home.component';
import { TranferMoneyComponent } from './tranfer/tranfer-money/tranfer-money.component';

const routes: Routes = [
  // { path: '**', component: HomeComponent },
  { path: '', component: ScreensaverComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pincode', component: PincodeComponent },
  { path: 'screensaver', component:  ScreensaverComponent},
  { path: 'language', component: SelectlanguageComponent },
  { path: 'cashout-home', component: CashoutHomeComponent },
  { path: 'cashout-option', component: CashoutOptionComponent },
  { path: 'cashout-input', component: CashoutInputComponent },
  { path: 'cashout-confirm', component: CashoutConfirmComponent },
  { path: 'tranfer-home', component: TranferHomeComponent },
  { path: 'tranfer-money', component: TranferMoneyComponent },
  { path: 'tranfer-check', component: TranferCheckComponent },
  { path: 'tranfer-confirm', component: TranferConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
