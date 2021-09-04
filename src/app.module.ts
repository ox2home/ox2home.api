import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MarkerModule} from './marker/marker.module';
import {ProductModule} from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONFIG),
    MarkerModule,
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
