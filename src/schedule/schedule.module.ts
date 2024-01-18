import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModel, ScheduleModelSchema } from './models/schedule.model';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({

	imports: [MongooseModule.forFeature([{ name: ScheduleModel.name, schema: ScheduleModelSchema }])],
	providers: [ScheduleService],
	controllers: [ScheduleController]
})
export class ScheduleModule { };