import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SelectlanguageComponent } from './selectlanguage/selectlanguage.component';
import { TransfersComponent } from './transfers/transfers.component';
import { PincodeComponent } from './pincode/pincode.component';
import { ScreensaverComponent } from './screensaver/screensaver.component';
import { CashoutHomeComponent } from './cashout/cashout-home/cashout-home.component';
import { CashoutOptionComponent } from './cashout/cashout-option/cashout-option.component';
import { CashoutConfirmComponent } from './cashout/cashout-confirm/cashout-confirm.component';
import { CashoutInputComponent } from './cashout/cashout-input/cashout-input.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectlanguageComponent,
    TransfersComponent,
    PincodeComponent,
    ScreensaverComponent,
    CashoutHomeComponent,
    CashoutOptionComponent,
    CashoutConfirmComponent,
    CashoutInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
