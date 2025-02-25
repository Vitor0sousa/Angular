import { Component } from '@angular/core';

@Component({
  selector: 'app-charmander',
  imports: [],
  templateUrl: './charmander.component.html',
  styleUrl: './charmander.component.css'
})
export class CharmanderComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 3000);

  }
}
