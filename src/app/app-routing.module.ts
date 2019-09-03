import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-kid', loadChildren: './add-kid/add-kid.module#AddKidPageModule' },
  { path: 'kid-info/:id', loadChildren: './kid-info/kid-info.module#KidInfoPageModule' },
  { path: 'new-plan/:id', loadChildren: './new-plan/new-plan.module#NewPlanPageModule' },
  { path: 'plan-info/:kid_id/:plan_id', loadChildren: './plan-info/plan-info.module#PlanInfoPageModule' },
  { path: 'set-mood', loadChildren: './set-mood/set-mood.module#SetMoodPageModule' },
  { path: 'set-reward', loadChildren: './set-reward/set-reward.module#SetRewardPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
