import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    { path: 'user', component: UserComponent }
];

@NgModule({
    declarations: [
        UserComponent,
    ],
    providers: [
        UserService
    ],
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [RouterModule]
})
export class UserModule { }
