import { Component } from '@angular/core';

@Component({
  selector: 'app-farfetch',
  imports: [],
  templateUrl: './farfetch.component.html',
  styleUrl: './farfetch.component.css'
})
export class FarfetchComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
}
