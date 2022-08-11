import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

  measurementForm = this.formBuilder.group({
    name: '',
    age: '',
    height: '',
    weight: '',
    bodyfatPercent: ''
  });

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void{
    console.warn('Measurements Updated', this.measurementForm.value.name);
    localStorage.setItem('measurementData', JSON.stringify(this.measurementForm.value));
    window.alert('Measurements updated!');
  }

  updateMeasurements(): void{
    let newData = JSON.parse(localStorage.getItem('measurementData') || '{}');
    this.measurementForm.setValue({
      name: newData.name,
      age: newData.age,
      height: newData.height,
      weight: newData.weight,
      bodyfatPercent: newData.bodyfatPercent
    });
  }

  clearMeasurements(): void{
    window.alert('Measurements cleared.');
    localStorage.removeItem('measurementData');
  }

  ngOnInit(): void {
    this.updateMeasurements();
  }

}