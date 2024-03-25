import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LessonSummary } from "../model/lesson-summary";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { Injectable } from "@angular/core";

@Injectable()
export class LessonResolver implements Resolve<LessonSummary[]>{

    constructor(private courses: CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LessonSummary[] | Observable<LessonSummary[]> | Promise<LessonSummary[]> {
        const coursesUrl = route.paramMap.get("coursesUrl")
        return this.courses.loadAllCourseLessonsSummary(coursesUrl)
    }
}