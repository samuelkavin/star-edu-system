import {Module} from '@nestjs/common';
import {PipesService} from './pipes.service';

@Module({
  providers: [PipesService],
  exports: [PipesService],
})
export class PipesModule {}
