import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListarProductosComponent } from './components/listar-productos-component/listar-productos-component';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

@NgModule({
  declarations: [
    App,
    ListarProductosComponent,
    HomeComponent,
    MenuComponent,
    ListaProductosComponent,
    PadreCochesComponent,
    HijoCocheComponent,
    HijoDeporteComponent,
    PadreDeportesComponent,
    PadreNumeroComponent,
    HijoNumeroComponent,
    ComicsSimpleComponent,
    ComicJsonComponent,
    ComicsExcelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
