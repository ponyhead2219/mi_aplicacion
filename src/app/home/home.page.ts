import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonContent, IonFooter, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretUpOutline, caretDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonFooter, IonHeader, IonTitle, IonContent, IonIcon],
})

// Aquí va toda la lógica de mi App Móvil
// Métodos, Variables, etc.
export class HomePage {
  public numero: number = 0;

  // Constantes
  // readonly: Evita que el valor de mi constante cambie 
  public readonly MINIMO: number = 0;
  public readonly MAXIMO: number = 9;

  constructor() {
    // Registrar los íconos para poder usarlos
    addIcons({ caretUpOutline, caretDownOutline });
  }

  counterUp() {
    if (this.numero < this.MAXIMO) {
      // console.log('Up');
      // this.numero = this.numero + 1;
      this.numero++;
    }
  }

  counterDown() {
    if (this.numero > this.MINIMO) {
      // console.log('Down');
      // this.numero = this.numero - 1;
      this.numero--;
    }
  }
}