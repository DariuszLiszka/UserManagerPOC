import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '',   redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './modules/users/users.module#UsersModule' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
