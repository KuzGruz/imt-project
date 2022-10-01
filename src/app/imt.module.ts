import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImtRoutingModule } from './imt-routing.module';
import { ImtComponent } from './imt.component';
import { LinkModule } from './share/components/link/link.module';
import { HomeComponent } from './home/home.component';
import { FieldModule } from './share/components/field/field.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './share/components/button/button.module';
import { ThemeModule } from './theme/theme.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ImtRoutingModule,
        LinkModule,
        FieldModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ButtonModule,
        ThemeModule
    ],
    declarations: [ImtComponent, HomeComponent],
    bootstrap: [ImtComponent]
})
export class ImtModule {
}
