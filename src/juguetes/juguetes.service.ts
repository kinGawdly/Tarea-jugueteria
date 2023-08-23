import { Injectable, NotFoundException } from '@nestjs/common';
import { Toys } from './interfaces/toys.interfaces';
import {v4 as uuid} from 'uuid';
import { CreateToyDto } from './dto/create-toys.dto';

@Injectable()
export class JuguetesService {

  private listaToys:Toys[] = [

  {

      id:1,
      nombre: "ken",
      tipoDeJuguete: "muñeco",
      largo: 20,
      ancho: 5,
      sku: 123123,
      fechaDeCreacion: "2023",
      fechaDeActualizacion: "2024",
      marca: "corporate corp",
      precio: 10000

  },
  {
    id: 2,
    nombre: "barbie",
    tipoDeJuguete: "muñeco",
    largo: 25,
    ancho: 3,
    sku: 1313,
    fechaDeCreacion: "2023",
    fechaDeActualizacion: "2024",
    marca: "corporate corp",
    precio: 15000


  }

  ];

  findAll(){
    return this.listaToys;
  }

  findOneByID(id:number){
    const toy = this.listaToys.find(toy => toy.id ===id); // debe hacerse con ciclo for of
    return toy;
  }

  createToy(createToyDto: CreateToyDto) {

    const toyDto = {
      id: this.listaToys[this.listaToys.length -1].id +1 ,
      ...createToyDto
    }
    this.listaToys.push(toyDto);
    return toyDto;
  }

}
