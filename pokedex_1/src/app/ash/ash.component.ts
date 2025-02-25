import { Component } from '@angular/core';

@Component({
  selector: 'app-ash',
  imports: [],
  templateUrl: './ash.component.html',
  styleUrl: './ash.component.css'
})
export class AshComponent {
  atacou=false
  usarAtaque(){
    this.atacou =true; 
    setTimeout(()=>this.atacou = false, 2000);

  }

}
