import { Component } from '@angular/core';
import { IonHeader, 
  IonTitle, 
  IonContent, 
  IonFooter, 
  IonButton, 
  IonIcon 
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretUpOutline, caretDownOutline } from 'ionicons/icons';
import {Preferences} from '@capacitor/preferences';   

//Forzar la detencción de cambios
import { ChangeDetectorRef} from '@angular/core';

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

  private readonly  KEY_NUMBER: string = 'ddr_key_number';

  constructor(private cdr : ChangeDetectorRef) {
    addIcons({ 
      caretUpOutline, 
      caretDownOutline 
    });
  }

  saveNumber() {
    Preferences.set({
      key: this.KEY_NUMBER,
      value: this.numero.toString()
    });
  }


  async ionViewWillEnter() {
    console.log('ionViewWillEnter');

    const counterPreferences = await Preferences.get({ key: this.KEY_NUMBER });

    if (counterPreferences.value) {
      const numero = +counterPreferences.value;
      if (isNaN(numero) || numero < this.MINIMO || this.numero > this.MAXIMO) {
        this.numero = this.MINIMO;
        this.saveNumber();  
      } else {
        this.numero = numero;
        this.cdr.detectChanges();
      }
    }
  }

  counterUp() {
    if (this.numero < this.MAXIMO) {
      // this.numero = this.numero + 1;
      this.numero++;
      this.saveNumber();
      console.log('Up', this.numero);
    
  }
  }
  counterDown() {
    if (this.numero > this.MINIMO) {
      // this.numero = this.numero - 1;
      this.numero--;
      this.saveNumber();
      console.log('Down', this.numero);

    }
  }
}