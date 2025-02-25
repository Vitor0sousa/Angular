import { Component } from '@angular/core';

@Component({
  selector: 'app-blaziken',
  imports: [],
  templateUrl: './blaziken.component.html',
  styleUrl: './blaziken.component.css'
})
export class BlazikenComponent {
  atacou = false;
  
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }
}
