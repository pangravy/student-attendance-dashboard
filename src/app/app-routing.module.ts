import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { MarkAttendanceComponent } from './components/mark-attendance/mark-attendance.component';
import { StatsComponent } from './components/stats/stats.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'new',
    component:NewUserComponent
  },
  {
    path:'mark',
    component:MarkAttendanceComponent
  },
  {
    path:'stats',
    component:StatsComponent
  },
  {
    path: 'update',
    component: UpdateUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
