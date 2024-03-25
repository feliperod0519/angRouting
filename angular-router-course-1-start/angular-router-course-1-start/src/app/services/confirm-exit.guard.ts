import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CourseComponent } from "../courses/course/course.component";
import { Observable } from "rxjs";

export class ConfirmExitGuard implements CanDeactivate<CourseComponent>{

    canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.confirmExit()
    }
}