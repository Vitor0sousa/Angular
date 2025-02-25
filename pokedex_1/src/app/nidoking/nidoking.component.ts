import { Component } from '@angular/core';

@Component({
  selector: 'app-nidoking',
  imports: [],
  templateUrl: './nidoking.component.html',
  styleUrl: './nidoking.component.css'
})
export class NidokingComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 3000);

  }
}
