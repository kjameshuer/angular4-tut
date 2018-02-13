import { Component } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    template: `
    <h2>{{ courses.length + ' ' + title }}</h2>
    <ul>
        <li *ngFor="let course of courses">{{ course }}</li>
    <ul>
    `
})
export class CoursesComponent  {
    title = "Courses";
    courses;

    constructor(service: CoursesService){        
        this.courses = service.getCourses();
    }

 }