import { Component, OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void { }

  onCourseViewed() {
    console.log('Button clicked');
    this.courseEmmiter.emit(this.course);
  }
  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return ['beginner'];
    }
    // return {
    //   'beginner': this.course.category === 'BEGINNER',
    //   'course-card': true
    // };
  }
  cardStyles() {
    // return { 'background-image': 'url(' + this.course.iconUrl + ')' };
  }
}
