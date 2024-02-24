import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { AppServiceService } from '../../app.service';


@Component({
  selector: 'app-lector-api-publica',
  templateUrl: './lector-api-publica.component.html',
  styleUrl: './lector-api-publica.component.css'
})
export class LectorApiPublicaComponent implements OnInit {
  displayedColumns: string[] = ['name', 'url'];
  dataSource: MatTableDataSource<any>;

  constructor(
    private apiService: AppServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.obtenerBandejaApi();
  }

  obtenerBandejaApi() {
    this.apiService.getApi().subscribe(response => {
      console.log(response);
      
      this.dataSource = new MatTableDataSource(response.results);
    });
  }

}