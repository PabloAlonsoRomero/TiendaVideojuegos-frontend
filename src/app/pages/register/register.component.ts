import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  passwordsNoCoinciden = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required]
    }, { validators: this.checkPasswords });
  }

  ngOnInit() {}

  checkPasswords(group: FormGroup) {
    const pass = group.get('contrasena')?.value;
    const confirmPass = group.get('confirmarContrasena')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { contrasena, confirmarContrasena } = this.registerForm.value;
      
      if (contrasena !== confirmarContrasena) {
        this.passwordsNoCoinciden = true;
        return;
      }
      
      this.passwordsNoCoinciden = false;
      
      const usuario: Usuario = {
        nombre_usuario: this.registerForm.value.nombreUsuario,
        email: this.registerForm.value.email,
        nombre: this.registerForm.value.nombre,
        telefono: this.registerForm.value.telefono,
        contrasena: this.registerForm.value.contrasena
      };

      this.usuarioService.postUsuario(usuario).subscribe(
        response => {
          console.log('Usuario registrado exitosamente', response);
          this.registerForm.reset();
        },
        error => {
          console.error('Error al registrar usuario', error);
        }
      );
    }
  }
}