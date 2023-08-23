import { Module } from '@nestjs/common';
import { JuguetesController } from './juguetes.controller';
import { JuguetesService } from './juguetes.service';

@Module({
  controllers: [JuguetesController],
  providers: [JuguetesService]
})
export class JuguetesModule {}
