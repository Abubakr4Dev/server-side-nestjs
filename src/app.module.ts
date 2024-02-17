import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongoModule } from './mongo/mongo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MongoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
