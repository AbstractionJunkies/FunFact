import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        UserComponent,
    ],
    providers: [
        UserService
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [RouterModule]
})
export class UserModule { }
