import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuarioService/usuario.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.usuarioService.loginUsuario(email, password).subscribe(
        response => {
          console.log("Usuario logueado exitosamente");
          
          localStorage.setItem('userId', response.userID);
          localStorage.setItem('isLoggedIn', 'true');

          this.router.navigate(['/']);
        },
        error => {
          console.log("Error al loguear usuario");
        }
      )
    }
  }
}
