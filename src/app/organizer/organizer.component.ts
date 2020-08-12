import { TasksService, Task } from './../shared/tasks.service';
import { Component, OnInit } from '@angular/core';
import { DateService } from '../shared/date.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css'],
})
export class OrganizerComponent implements OnInit {
  form: FormGroup;

  constructor(
    public dateService: DateService,
    public tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  submit() {
    const { title } = this.form.value;

    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    };

    this.tasksService.create(task).subscribe( task => {

    }, err=> console.error(err));
    
  }
}
