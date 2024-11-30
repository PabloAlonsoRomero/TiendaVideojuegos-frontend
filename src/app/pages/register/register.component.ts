import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuarioService } from '../../services/usuarioService/usuario.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone: true
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordsNoCoinciden = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(6)],
      confirmarPassword: ['', Validators.required],
      telefono: ['', Validators.required],
      username: ['', Validators.required]
    }, {validator: this.checkPasswords});
  }

  ngOnInit() {
    
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const {contrasena, confirmarContrasena} = this.registerForm.value;

      if (contrasena !== confirmarContrasena) {
        this.passwordsNoCoinciden = true;
        return;
      }

      this.passwordsNoCoinciden = false;

      const usuario = {
        nombre_usuario: this.registerForm.value.nombreUsuario,
        email: this.registerForm.value.email,
        nombre: this.registerForm.value.nombre,
        telefono: this.registerForm.value.telefono,
        contrasena: this.registerForm.value.contrasena,
      };

      this.usuarioService.postUsuario(usuario).subscribe(
        response => {
          console.log('Usuario registrado exitosamente', response);
        },
        error => {
          console.error('Error al registrar usuario', error);
        }
      );
    }
  }
}
