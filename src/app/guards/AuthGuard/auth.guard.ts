import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

  if (isLoggedIn) {
    // Si el usuario está logueado, redirigue al home
    router.navigate(['/']);
    return false;
  }
  return true;
};
