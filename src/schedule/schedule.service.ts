import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { ScheduleModel } from './models/schedule.model';

@Injectable()
export class ScheduleService {
	constructor(
		@InjectModel(ScheduleModel.name) private readonly scheduleModel: Model<ScheduleModel>
	) {
	}

	async isAvailable(roomId: string, date: Date): Promise<boolean> {
		const booked = await this.scheduleModel.findOne({ room: new Types.ObjectId(roomId), date, canceled: false });
		if (!booked) { return false }
		else { return true }
	}

	async create(dto: CreateScheduleDto): Promise<ScheduleModel> {
		if (this.isAvailable(dto.roomId, dto.date)) {
			return this.scheduleModel.create({ ...dto, canceled: false });
		}
	}

	async cancel(roomId: string, date: Date): Promise<ScheduleModel | null> {
		return this.scheduleModel.findOneAndUpdate({ room: new Types.ObjectId(roomId), date, canceled: false }, { canceled: true }).exec();
	}

	async findByRoomId(roomId: string): Promise<ScheduleModel[]> {
		return this.scheduleModel.find({ room: new Types.ObjectId(roomId) }).exec()
	}

	async findByDate(date: Date): Promise<ScheduleModel[]> {
		return this.scheduleModel.find({ date: date }).exec()
	}

}