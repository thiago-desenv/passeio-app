import { CanActivateFn, Router } from '@angular/router';
import { Authgoogle } from './authgoogle';
import { inject } from '@angular/core';
import { Profile } from './autenticacaopagina/profile.model';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService: Authgoogle = inject(Authgoogle);
  const router: Router = inject(Router);

  const loggedProfile: Profile = loginService.getLoggedProfile();
  if(loggedProfile) {
    return true;
  }

  router.navigate(['']);

  return false;
};
