import {Module} from '@nestjs/common';
import {MarkerService} from './marker.service';
import {MarkerController} from './marker.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {MarkerSchema} from './marker.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Marker',
        schema: MarkerSchema
      }
    ])
  ],
  controllers: [MarkerController],
  providers: [MarkerService]
})
export class MarkerModule {}
