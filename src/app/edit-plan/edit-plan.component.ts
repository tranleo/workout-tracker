import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {

  constructor(
    public planService: PlanService,
    public route: ActivatedRoute
  ) { }

  planExercises: any[] = [];
  public key: string = '';
  getKey(key: string){  // Gets key of plan from URL
    this.key = this.route.snapshot.paramMap.get('keys')!;
    console.log(this.key);
  }

  ngOnInit(): void {
    this.getKey(this.key)

    let planData = JSON.parse(localStorage.getItem(this.key)!);
    for (let j = 0; j < planData.length; j++){
      this.planExercises.push(planData[j]);
    }
  }

}
