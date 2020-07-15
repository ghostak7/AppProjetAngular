import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionGuardService implements CanActivate {

  constructor(private connexionService: ConnexionService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

      if(this.connexionService.getAccount() !== 0) {
        return true
      } else {
        this.router.navigate(['connexion'])
      }
  }
}
