import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "../model/course";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course>{

    constructor(private coursesService: CoursesService){
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
        //localhost:4200/courses/blah-blah-blah
        const coursesUrl = route.paramMap.get("coursesUrl")
        return this.coursesService.loadCourseByUrl(coursesUrl)
    }
}