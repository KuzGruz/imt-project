import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '../share/directives/let/let.module';


@NgModule({
    imports: [
        CommonModule,
        LetModule
    ]
})
export class UserModule {
}
