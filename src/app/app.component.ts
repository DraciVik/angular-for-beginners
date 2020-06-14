import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
export class AppComponent implements OnInit {

    courses: Course[] = COURSES;

    coursesTotal = this.courses.length;

    constructor(
        private coursesService: CoursesService,
        @Inject(CONFIG_TOKEN) private config: AppConfig,
        private injector: Injector) {

    }

    ngOnInit() {

        const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

        customElements.define('course-title', htmlElement);

    }

    onEditCourse() {

            this.courses[1].category = 'ADVANCED';

    }

  courses = COURSES;


  onCourseSelected(course: Course) {
    console.log('App component card clicked, event bubbled...', course);
  }
}
