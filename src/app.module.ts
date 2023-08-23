import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuguetesModule } from './juguetes/juguetes.module';

@Module({
  imports: [JuguetesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
