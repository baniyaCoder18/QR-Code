import { NgModule } from "@angular/core";
import { QrCodeComponent } from "./qr-code/qr-code.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { QRCodeModule } from "angularx-qrcode";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
    
],
imports:[
    QrCodeComponent,
    AppComponent,
    BrowserModule,
    QRCodeModule,
    RouterModule,
    FormsModule
],
providers:[]
})

export class AppModule{

}