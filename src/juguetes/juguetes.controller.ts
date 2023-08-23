import { Body, Controller, Get, Param,ParseUUIDPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { JuguetesService } from './juguetes.service';
import { CreateToyDto } from './dto/create-toys.dto';

@Controller('juguetes')
//@UsePipes(ValidationPipe)
export class JuguetesController {

  constructor(

    private readonly toysService: JuguetesService
  ){}

  @Post() // Creacion de juguete
  createToy(@Body() createToyDto: CreateToyDto){
    return createToyDto;
  }



 /* @Get(':id')
  getToysById(@Param('id', new ParseUUIDPipe({version: '4'}))id:string){
    console.log({id});
    return this.toysService.findOneby()[id];
  }
  */
}
