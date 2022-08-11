import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-past-workouts',
  templateUrl: './past-workouts.component.html',
  styleUrls: ['./past-workouts.component.css']
})
export class PastWorkoutsComponent implements OnInit {

  constructor(
    public planService: PlanService,
    public route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  logForm = this.formBuilder.group({
    date: '',
    completed: ''
  })

  items: Array<any> = [];
  logData: any;

  confirmExercise(){
    let completedExercise = this.logForm.value.completed;
    this.items.push(completedExercise);
    console.log(JSON.stringify(this.items));
  }

  logWorkout(){
    let keyDate = this.logForm.value.date;
    localStorage.setItem(keyDate!, JSON.stringify(this.items));
    console.log(keyDate);
    // window.location.reload();
  }

  displayLog(pastLog: any){
    pastLog = JSON.parse(localStorage.getItem('1234')!);
    console.log('Past log: ' + pastLog);
    // console.log('Past log JSON: JSON.parse(this.logData));
    return pastLog;
  }

  planExercises: any[] = [];
  public key: string = '';
  getKey(key: string){
    this.key = this.route.snapshot.paramMap.get('keys')!;
    console.log(this.key);
  }

  ngOnInit(): void {
    this.getKey(this.key);

    let planData = JSON.parse(localStorage.getItem(this.key)!);
    for (let j = 0; j < planData.length; j++){
      this.planExercises.push(planData[j]);
    }

    this.displayLog(this.logData);
  }

}
