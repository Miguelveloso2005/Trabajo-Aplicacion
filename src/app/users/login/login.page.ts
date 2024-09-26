import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm!: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private toastCtrl: ToastController) {
    this.createForm();
  }

  // Asegurarse de inicializar el formulario correctamente
createForm() {
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
}

// Accesos seguros a los controles del formulario
get email() {
  return this.loginForm.get('email');  // Aquí se obtiene el control de 'email'
}


  // Función para mostrar/ocultar la contraseña
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Método para manejar el envío del formulario
  async onSubmit() {
    if (this.loginForm.valid) {
      const toast = await this.toastCtrl.create({
        message: 'Inicio de sesión exitoso',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Por favor, complete correctamente los campos',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  // Accesos a los controles del formulario para facilitar validaciones en la plantilla
 

  get password() {
    return this.loginForm.get('password');
  }
}
