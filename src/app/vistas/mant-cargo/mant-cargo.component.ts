import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../servicios/api/api.service'
import { ListacargosI } from '../../modelo/listacargos.interface'


@Component({
  selector: 'app-mant-cargo',
  templateUrl: './mant-cargo.component.html',
  styleUrls: ['./mant-cargo.component.css']
})
export class MantCargoComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {

    this.api.getAllCargos().subscribe(data => {
      console.log(data)
    })

  }

}
