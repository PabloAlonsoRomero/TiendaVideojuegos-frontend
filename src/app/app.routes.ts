import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BibliotecaPageComponent } from './pages/biblioteca-page/biblioteca-page.component';
import { AgregarAdminComponent } from './pages/admin/agregar-admin/agregar-admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'biblioteca', component: BibliotecaPageComponent},
    { path: 'admin/agregarAdmin', component: AgregarAdminComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }