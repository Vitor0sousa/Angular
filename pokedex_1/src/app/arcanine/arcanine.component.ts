import { Component } from '@angular/core';

@Component({
  selector: 'app-arcanine',
  imports: [],
  templateUrl: './arcanine.component.html',
  styleUrl: './arcanine.component.css'
})
export class ArcanineComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
}
