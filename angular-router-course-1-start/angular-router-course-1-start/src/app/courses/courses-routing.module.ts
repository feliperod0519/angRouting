import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonResolver } from './services/lessons.resolver';
import { LessonDetailResolver } from './services/lesson-detail.resolver';
import { AuthGuard } from '../services/auth.guard';
import { ConfirmExitGuard } from '../services/confirm-exit.guard';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:":coursesUrl", 
    component: CourseComponent, 
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canDeactivate: [ ConfirmExitGuard],
    children:[
              { path: "", component: LessonsListComponent,resolve: {lessons:LessonResolver} },  
              //http://localhost:4200/courses/bla-bla-bla/lessons/18
              { path: "lessons/:lessonSeqNo",component: LessonDetailComponent, resolve: {lesson:LessonDetailResolver} } 
             ],
    resolve:{ course: CourseResolver } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver, 
    LessonResolver,
    LessonDetailResolver, 
    AuthGuard,
    ConfirmExitGuard
  ]
})
export class CoursesRoutingModule {



}
