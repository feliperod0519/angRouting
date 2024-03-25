import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from 'rxjs/operators'

@Injectable()
export class CanLoadAuthGuard implements CanLoad{
    constructor(private auth:AuthStore, private router: Router){}

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.auth.isLoggedIn$.pipe(first(),
                                          tap(loggedIn=>{
                                            if (!loggedIn){
                                                this.router.navigateByUrl('/login');
                                            }
                                          }));
    }
}