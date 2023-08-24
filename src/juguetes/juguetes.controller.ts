import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JuguetesService } from './juguetes.service';
import { CreateToyDto } from './dto/create-toys.dto';
import { UpdateToyDto } from './dto/update-toys.dto';

@Controller('juguetes')
//@UsePipes(ValidationPipe)
export class JuguetesController {
  constructor(private readonly toysService: JuguetesService) {}

  @Post() // Creacion de juguete
  createToy(@Body() createToyDto: CreateToyDto) {
    return this.toysService.createToy(createToyDto);
  }

  @Get() // encontrar todos los juguetes
  findAll() {
    return this.toysService.findAll();
  }

  @Get(':sku') // encontrar juguete por su SKU
  getToysBySKU(@Param('sku') sku: number) {
    return this.toysService.findOneBySKU(+sku);
  }

  @Patch(':id')
  updatePartialToy(
    @Body() updateToyDto: UpdateToyDto,
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    //console.log(updateToyDto, id);
    return this.toysService.updateToy(id, updateToyDto);
  }

  @Delete(':id') // 1ero el ciente lo escribe , 2do llega como parametro al "delete", despues lo lee como parametro y lo valida que sea string para luego enviarlo al servicio, al metodo que le puse "delete"
  deleteToy(@Param('id', ParseUUIDPipe) id: string) {
    return this.toysService.delete(id);
  }
}
