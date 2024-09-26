import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Modificar', url: '/folder/Modificar', icon: 'person-add' },
    { title: 'Consultar', url: '/folder/Consultar', icon: 'heart' },
    { title: 'Listado', url: '/folder/Listado', icon: 'archive' },
    { title: 'login', url: 'login', icon: 'log-in' },
    { title: 'register', url: 'register', icon: 'log-in' },
  ];
  public labels = [ 'Sobre Nosotros', 'Ayuda'];
  constructor() {}
}
