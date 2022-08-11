import { Injectable } from '@angular/core';
import { Exercise, exercises } from './exercises';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  items: Exercise[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) { }

  planForm = this.formBuilder.group({
    planName: ''
  })

  planSxR = this.formBuilder.group({
    goal_sets: 0,
    goal_repetitions: 0
  })
  
  addToPlan(exercises: Exercise){
    exercises.goal_sets = this.planSxR.value.goal_sets!;
    exercises.goal_repetitions = this.planSxR.value.goal_repetitions!;
    this.items.push(exercises);
    window.alert(exercises.name + ' ' + exercises.goal_sets + 'x' + exercises.goal_repetitions);
  }

  createPlan(){
    let planTitle = this.planForm.value.planName;
    let planExerciseData = JSON.stringify(this.items);
    localStorage.setItem(planTitle! , planExerciseData);
    window.alert('Plan: ' + planTitle + ' created!');
    planExerciseData = '';
    console.log(this.items);
    window.location.reload();
  }

  editPlan(key: any, exercise: any){
    let planExerciseData = JSON.parse(localStorage.getItem(key)!);
    for (let i = 0; i < planExerciseData.length; i++){
      if (exercise.name == planExerciseData[i].name){
        console.log(planExerciseData[i].name + ' removed!');
        planExerciseData.splice(i,1);
        localStorage.setItem(key, JSON.stringify(planExerciseData))
        window.location.reload();
      }
    }
  }

  removePlan(key: string){
    window.alert('Plan: ' + key + ' has been removed.');
    localStorage.removeItem(key);
    window.location.reload();
  }

  getAllItems(workoutPlans: any){ // Gets all keys in local storage.
    for ( var i = 0, len = localStorage.length; i < len; i++ ) {
      workoutPlans[i] = (localStorage.key(i));
    }
    return workoutPlans;
  }
}
