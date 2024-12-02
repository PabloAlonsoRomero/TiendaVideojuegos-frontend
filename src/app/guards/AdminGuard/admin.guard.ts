import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { catchError, map, of } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuarioService = inject(UsuarioService);

  const userId = localStorage.getItem('userId');
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn || !userId) {
    // Si no está logueado, redirigue al login
    router.navigate(['/login']);
    return false;
  }

  // Verificar si el usuario es admin
  return usuarioService.getAdmin(userId).pipe(
    map(response => {
      if (response.admin) {
        return true;
      } else {
        router.navigate(['/']);
        return false; // No es admin, redirigir al home
      }
    }),
    catchError(error => {
      console.error('Error al verificar admin', error);
      router.navigate(['/']);
      return of(false);
    })
  )
};
