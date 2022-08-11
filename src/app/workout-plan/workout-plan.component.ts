import { Component, OnInit } from '@angular/core';

import { Plan, planEx} from '../plans';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.css']
})
export class WorkoutPlanComponent implements OnInit {
  plansEx = planEx;
  keys: Array<any> = [];
  planExercises: any[] = [];

  constructor(
    public planService: PlanService
  ) { }

  ngOnInit(): void {
    this.planService.getAllItems(this.keys); 

    for (let i = 0; i < this.keys.length; i++){
      let planData = JSON.parse(localStorage.getItem(this.keys[i])!);
      if (this.keys[i] == 'measurementData'){
        this.keys.splice(i,1);  // Remove measurementData from this local array.
        i --;
      }else{
        this.planExercises.push(planData);
        console.log(planData);
      }
    }
  }

}