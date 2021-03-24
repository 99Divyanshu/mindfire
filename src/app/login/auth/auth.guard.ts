import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('username')!=null)
      {
        alert("Token Generated in LocalStorage....Welcome!!")
        return true;
      }
      else
      {
        this.routes.navigate(['/login']);
        alert("token not generated and therefore cannot redirect ...please pass the authentication test from login!!")
        return false;
      }
    
  }
  
}
