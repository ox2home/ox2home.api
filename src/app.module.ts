import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductModule} from './product/product.module';
import {MarkerModule} from './marker/marker.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONFIG),
    ProductModule,
    MarkerModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
