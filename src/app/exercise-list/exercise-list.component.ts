import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Exercise, exercises } from '../exercises';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit{
  exercises = exercises;

  constructor(
    private route: ActivatedRoute,
    private planService: PlanService
  ) {}

  addToPlan(exercises: Exercise){
    this.planService.addToPlan(exercises);
    window.alert('This exercise has been added to the plan!');
  }

  ngOnInit(): void {
    
  }
}