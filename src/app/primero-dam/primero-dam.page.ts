import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-primero-dam',
  templateUrl: './primero-dam.page.html',
  styleUrls: ['./primero-dam.page.scss'],
})
export class PrimeroDamPage implements OnInit {
  prog: false;
  bbdd: false;
  entornos: false;
  sistemas: false;
  lenguaje: false;
  fol: false;
  ingles: false;

  programacion='Programación';
  base='Base de datos';
  entornos2='Entornos de Desarrollo';
  sistemas2='Sistemas Informaticos';
  lenguaje2='Lenguaje de Marcas';
  fol2='Formacion y Orientacion Laboral';
  ingles2='Ingles'


  constructor(private toastController: ToastController) { }

  async presentToast1(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.programacion,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast2(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.base,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast3(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.entornos2,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast4(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.sistemas2,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast5(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.lenguaje2,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast6(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.fol2,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async presentToast7(position: 'bottom') {
    const toast = await this.toastController.create({
      message: this.ingles2,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  ngOnInit() {
  }


  
}


