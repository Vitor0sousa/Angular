import { Component } from '@angular/core';

@Component({
  selector: 'app-ho-oh',
  imports: [],
  templateUrl: './ho-oh.component.html',
  styleUrl: './ho-oh.component.css'
})
export class HoOhComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
}
