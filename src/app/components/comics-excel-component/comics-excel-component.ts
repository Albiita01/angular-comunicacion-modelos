import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/Comic';
// Importamos la librería y le damos un alias para trabajar
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-comics-excel-component',
  standalone: false,
  styleUrl: './comics-excel-component.css',
  templateUrl: './comics-excel-component.html',
})
export class ComicsExcelComponent {

  public arrayComics: Array<Comic>;

  constructor(private _cdr: ChangeDetectorRef) {
    this.arrayComics = [];
  }

  cargarComics(): void {
    let path = "./assets/comics.xlsx";
    fetch(path).then(response => response.arrayBuffer())
      .then((buffer) => {
        // Leer el buffer y transformarlo a libro de excel
        let workbook = XLSX.read(buffer, { type: "array" });
        // Para recuperar las hojas del libro se hace por name
        // Recuperamos el name de la hoja
        let hojaName = workbook.SheetNames[0];
        // Recuperamos la hoja
        let hoja = workbook.Sheets[hojaName];
        // Como tiene formato de tabla, convertimos a JSON
        let data = XLSX.utils.sheet_to_json(hoja);
        console.log(data);
        this.arrayComics = data.map((c: any) => new Comic(c.nombre, c.imagen, c.descripcion));
        this._cdr.detectChanges();
      })
  }
}
