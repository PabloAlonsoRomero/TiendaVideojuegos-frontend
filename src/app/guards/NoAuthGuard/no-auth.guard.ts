import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    // Si no está logueado, redirige al login
    router.navigate(['/login']);
    return false;
  }
  return true; // Permitir acceso si está logueado
};
