import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SeasonComponent } from "./components/season/season";
import { EpisodeComponent } from "./components/episode/episode";

const routes: Routes = [
  { path: "seasons/:id", component: SeasonComponent },
  { path: "episodes/:id", component: EpisodeComponent },
  { path: "", redirectTo: "/seasons/1", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
