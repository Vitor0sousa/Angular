import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PikachuComponent } from "./pikachu/pikachu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PikachuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
