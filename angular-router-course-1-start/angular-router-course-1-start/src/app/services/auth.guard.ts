import { Injectable } from "@angular/core";
import { AuthStore } from "./auth.store";
import { CanActivateChild, Router } from "@angular/router";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private auth: AuthStore, private router:Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkIfAuthenticated();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.checkIfAuthenticated();
    }

    private checkIfAuthenticated(){
        return this.auth.isLoggedIn$.pipe(
            map(loggedIn=>loggedIn?true: this.router.parseUrl('/login'))
        )
    }
}