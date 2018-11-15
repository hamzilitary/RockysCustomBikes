import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    currentFocus: string = 'Brocks Bike Repair Site';
    currentTime = new Date();
    month: number = this.currentTime.getMonth() + 1;
    day: number = this.currentTime.getDate();
    year: number = this.currentTime.getFullYear();
    tasks: Task[] = [
       new Task('Dont drive on bumpy roads with pipin hot coffee'),
       new Task('Take fish oil '),
       new Task('Add README file to last few Angular repos on GitHub'),
       new Task('Add more goals here')
     ];



  constructor() { }

  ngOnInit() {
  }

}
