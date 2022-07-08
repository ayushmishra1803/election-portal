import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserInfoService } from '../../services/userInfo/user-info.service';

@Injectable({
  providedIn: 'root',
})
export class PartyAdminGuard implements CanActivate {
  constructor(
    private userInforService: UserInfoService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.userInforService.UserData.pipe(
      map((userData: any) => {
        if (userData && userData.user_type === 'party-admin') {
          return true;
        } else {
          this.router.navigate(['/'], { replaceUrl: true });
          return false;
        }
      })
    );
  }
}
