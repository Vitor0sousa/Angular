import { Routes } from '@angular/router';
import path from 'node:path';
import { PikachuComponent } from './pikachu/pikachu.component';
import { CharmanderComponent } from './charmander/charmander.component';
import { NidokingComponent } from './nidoking/nidoking.component';
import { LucarioComponent } from './lucario/lucario.component';
import { AshComponent } from './ash/ash.component';
import { FarfetchComponent } from './farfetch/farfetch.component';
import { GengarComponent } from './gengar/gengar.component';
import { ArcanineComponent } from './arcanine/arcanine.component';
import { BlazikenComponent } from './blaziken/blaziken.component';
import { SolgaleoComponent } from './solgaleo/solgaleo.component';
import { HoOhComponent } from './ho-oh/ho-oh.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
{path: 'pikachu',component:PikachuComponent},
{path: 'charmander',component:CharmanderComponent},
{path:'nidoking',component:NidokingComponent},
{path:'lucario',component:LucarioComponent},
{path:'ash',component:AshComponent},
{path:'farfetch',component:FarfetchComponent},
{path:'gengar',component:GengarComponent},
{path:'arcanine',component:ArcanineComponent},
{path:'blaziken',component:BlazikenComponent},
{path:'solgaleo',component:SolgaleoComponent},
{path:'ho-oh',component:HoOhComponent},
{path:'',component:HomepageComponent}
];
