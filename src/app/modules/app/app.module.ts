import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./components/app/app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { AppService } from "./services/app/app.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
