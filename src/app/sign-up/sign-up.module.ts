import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignUpConfirmComponent } from './sign-up-confirm/sign-up-confirm.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldModule } from '../share/components/field/field.module';
import { ButtonModule } from '../share/components/button/button.module';


@NgModule({
    imports: [
        CommonModule,
        SignUpRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        FieldModule,
        ButtonModule
    ],
    declarations: [SignUpFormComponent, SignUpConfirmComponent, SignUpComponent]
})
export class SignUpModule {
}
