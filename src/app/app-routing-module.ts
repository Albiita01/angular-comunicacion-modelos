import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "listaproductos", component: ListaProductosComponent },
  { path: "padrecoches", component: PadreCochesComponent },
  { path: "padredeportes", component: PadreDeportesComponent },
  { path: "padrenumeros", component: PadreNumeroComponent },
  { path: "comicssimple", component: ComicsSimpleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
