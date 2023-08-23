import { Body, Controller, Get, Param,ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { JuguetesService } from './juguetes.service';
import { CreateToyDto } from './dto/create-toys.dto';
import { UpdateToyDto } from './dto/update-toys.dto';

@Controller('juguetes')
//@UsePipes(ValidationPipe)
export class JuguetesController {

  constructor(

    private readonly toysService: JuguetesService
  ){}

  @Post() // Creacion de juguete
  createToy(@Body() createToyDto: CreateToyDto){
    return  this.toysService.createToy(createToyDto);
  }

  @Get() // encontrar todos los juguetes
  findAll(){
    return this.toysService.findAll()
  }



  @Get(':sku') // encontrar juguete por su SKU
  getToysById(@Param('sku') sku:number){

    return this.toysService.findOneBySKU(+sku);
  }

  @Patch()
  updatePartialToy(@Body() updateToyDto: UpdateToyDto, @Param('id', new ParseUUIDPipe({ version: '4' })) id: string){
    // return this.toysService.updateToy(id, updateToyDto); falta crear updateToy en service
  }


}
