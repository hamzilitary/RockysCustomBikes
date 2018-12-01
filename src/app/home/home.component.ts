import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentFocus: string = "Rocky's Custom Bikes";
    currentTime = new Date();
    month: number = this.currentTime.getMonth() + 1;
    day: number = this.currentTime.getDate();
    year: number = this.currentTime.getFullYear();
    tasks: Task[] = [
       new Task('Professional, Detailed, and Personalized Bike Builds'),
       new Task('Serving Oceanside and surrounding area'),
       new Task('Pick up and Drop off service available'),
       new Task('By appointment only'),
     ];



  constructor() { }

  ngOnInit() {
  }

}
