import { Component } from '@angular/core';

@Component({
  selector: 'app-gengar',
  imports: [],
  templateUrl: './gengar.component.html',
  styleUrl: './gengar.component.css'
})
export class GengarComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
  
}
