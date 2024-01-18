import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomModel, RoomModelSchema } from './models/room.model';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: RoomModel.name, schema: RoomModelSchema }])],
	providers: [RoomService],
	controllers: [RoomController]
})
export class RoomModule { }
