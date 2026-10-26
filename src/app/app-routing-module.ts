import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "listaproductos", component: ListaProductosComponent },
  { path: "padrecoches", component: PadreCochesComponent },
  { path: "padredeportes", component: PadreDeportesComponent },
  { path: "padrenumeros", component: PadreNumeroComponent },
  { path: "comicssimple", component: ComicsSimpleComponent },
  { path: "comicjson", component: ComicJsonComponent },
  { path: "comicexcel", component: ComicsExcelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
