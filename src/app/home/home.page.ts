import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonContent, IonFooter, IonButton} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonTitle, IonContent,IonFooter, IonButton]
})

//Aquí va toda la logica de mi app movil
export class HomePage 
{
  public numero: number =0;
  constructor() {}
}
