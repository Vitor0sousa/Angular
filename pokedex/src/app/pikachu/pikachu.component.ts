import { Component } from '@angular/core';

@Component({
  selector: 'app-pikachu',
  imports: [],
  templateUrl: './pikachu.component.html',
  styleUrl: './pikachu.component.css'
})
export class PikachuComponent {
  atacou = false;
  usarAtaque()
  {
    this.atacou = true; setTimeout(() => this.atacou = false, 2000);
  }
}
