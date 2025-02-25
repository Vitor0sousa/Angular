import { Component } from '@angular/core';

@Component({
  selector: 'app-lucario',
  imports: [],
  templateUrl: './lucario.component.html',
  styleUrl: './lucario.component.css'
})
export class LucarioComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
}
