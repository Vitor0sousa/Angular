import { Component } from '@angular/core';

@Component({
  selector: 'app-solgaleo',
  imports: [],
  templateUrl: './solgaleo.component.html',
  styleUrl: './solgaleo.component.css'
})
export class SolgaleoComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 3000);

  }
}
