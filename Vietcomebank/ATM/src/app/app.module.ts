import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectlanguageComponent } from './selectlanguage/selectlanguage.component';
import { PincodeComponent } from './pincode/pincode.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';
import { CashoutHomeComponent } from './cashout/cashout-home/cashout-home.component';
import { CashoutConfirmComponent } from './cashout/cashout-confirm/cashout-confirm.component';
import { CashoutInputComponent } from './cashout/cashout-input/cashout-input.component';
import { CurrencyPipe } from '@angular/common';
import { TranferHomeComponent } from './tranfer/tranfer-home/tranfer-home.component';
import { TranferCheckComponent } from './tranfer/tranfer-check/tranfer-check.component';
import { TranferConfirmComponent } from './tranfer/tranfer-confirm/tranfer-confirm.component';
import { TranferMoneyComponent } from './tranfer/tranfer-money/tranfer-money.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectlanguageComponent,
    PincodeComponent,
    ScreensaverComponent,
    CashoutHomeComponent,
    CashoutConfirmComponent,
    CashoutInputComponent,
    CashoutHomeComponent,
    CashoutConfirmComponent,
    CashoutInputComponent,
    TranferHomeComponent,
    TranferCheckComponent,
    TranferConfirmComponent,
    TranferMoneyComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
