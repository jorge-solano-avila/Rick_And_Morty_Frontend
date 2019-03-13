import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SeasonComponent } from "./components/season/season";

const routes: Routes = [
  { path: "seasons/:id", component: SeasonComponent },
  { path: "", redirectTo: "/seasons/1", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
