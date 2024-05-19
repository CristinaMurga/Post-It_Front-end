import { CanActivateFn , Router } from '@angular/router';
import { LogInService } from '../shared/log-in.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LogInService);
  const router = inject(Router);
  if (loginService.isLoggedIn == false) {
    router.navigate(['/login']);
    return false;
}

return loginService.isLoggedIn;
};
