import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { exercises } from '../exercises';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {

  constructor(
    public planService: PlanService
  ) { }

  exercises = exercises;

  ngOnInit(): void {
  }

}
