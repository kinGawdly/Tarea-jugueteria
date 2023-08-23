import { Injectable} from '@nestjs/common';
import { Toys } from './interfaces/toys.interfaces';
import { CreateToyDto } from './dto/create-toys.dto';
import { v4 as uuid } from 'uuid';


@Injectable()
export class JuguetesService {

  private listaToys:Toys[] = [

  {

    id:uuid(),
    nombre: "ken",
    tipoDeJuguete: "muñeco",
    largo: 20,
    ancho: 5,
    sku: 123123,
    fechaDeCreacion: new Date('1995-12-17'),
    fechaDeActualizacion: new Date('2000-11-13'),
    marca: "corporate corp",
    precio: 10000

  },
  {
    id:uuid(),
    nombre: "barbie",
    tipoDeJuguete: "muñeco",
    largo: 25,
    ancho: 3,
    sku: 1313,
    fechaDeCreacion: new Date('1960-09-10'),
    fechaDeActualizacion: new Date('2023-07-06'),
    marca: "corporate corp",
    precio: 15000


  }

  ];

  findAll(){
    return this.listaToys;
  }

  findOneBySKU(sku:number){ // encontrar juguete por SKU
    let index = 0;
    for (let toy of this.listaToys){

      //console.log(typeof toy.sku)
      //console.log(typeof sku)
      if( toy.sku === sku){
        break;
      }
      index++;


    }

    if(index === this.listaToys.length){
      return "no se encontro el juguete"
    }

    return this.listaToys[index]

  }

  createToy(createToyDto: CreateToyDto) {

    const toyDto = {
     id:uuid(),
      ...createToyDto,
      fechaDeCreacion: new Date(),
      fechaDeActualizacion: new Date(),
    }
    this.listaToys.push(toyDto);
    return toyDto;
  }

}
