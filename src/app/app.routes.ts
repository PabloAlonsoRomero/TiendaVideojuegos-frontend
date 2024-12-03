import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BibliotecaPageComponent } from './pages/biblioteca-page/biblioteca-page.component';
import { AgregarAdminComponent } from './pages/admin/agregar-admin/agregar-admin.component';
import { authGuard } from './guards/AuthGuard/auth.guard';
import { noAuthGuard } from './guards/NoAuthGuard/no-auth.guard';
import { adminGuard } from './guards/AdminGuard/admin.guard';
import { JuegoEspecificoComponent } from './pages/juego-especifico/juego-especifico.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent, canActivate: [authGuard] }, // Solo si no está logueado
    { path: 'register', component: RegisterComponent, canActivate: [authGuard] }, // Solo si no está logueado
    { path: 'biblioteca', component: BibliotecaPageComponent, canActivate: [noAuthGuard]}, // Solo si está logueado
    { path: 'admin/agregarAdmin', component: AgregarAdminComponent, canActivate: [adminGuard]}, // Solo si es admin
    { path: 'juego/:_id', component: JuegoEspecificoComponent} // Puede ir cualquiera
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }