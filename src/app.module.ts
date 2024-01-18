import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongoConfig } from './configs/mongo/mongo.config';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: 'envs/.api.env', isGlobal: true }),
    ConfigModule.forRoot({ envFilePath: 'envs/.account.env', isGlobal: true }),
    ScheduleModule,
    RoomModule,
    MongooseModule.forRootAsync(getMongoConfig())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
