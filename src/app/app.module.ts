import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { WorkoutPlanComponent } from './workout-plan/workout-plan.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';
import { EditPlanComponent } from './edit-plan/edit-plan.component';
import { PastWorkoutsComponent } from './past-workouts/past-workouts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ExerciseListComponent},
      { path: 'workout-plan', component: WorkoutPlanComponent},
      { path: 'measurements', component: MeasurementComponent},
      { path: 'create-plan', component: CreatePlanComponent},
      { path: 'edit-plan/:keys', component: EditPlanComponent},
      { path: 'past-workouts/:keys', component: PastWorkoutsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    ExerciseListComponent,
    WorkoutPlanComponent,
    MeasurementComponent,
    CreatePlanComponent,
    EditPlanComponent,
    PastWorkoutsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
