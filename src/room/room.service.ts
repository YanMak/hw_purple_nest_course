import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dtos/create-room.dto';
import { FilterRoomDto } from './dtos/filter-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { RoomModel } from './models/room.model';

@Injectable()
export class RoomService {
	constructor(
		@InjectModel(RoomModel.name) private readonly roomModel: Model<RoomModel>
	) {
	}

	async create(dto: CreateRoomDto): Promise<RoomModel> {
		return this.roomModel.create(dto);
	}

	async find(dto: FilterRoomDto): Promise<RoomModel[]> {
		return this.find(dto);
	}

	async delete(id: string): Promise<RoomModel | null> {
		return this.roomModel.findByIdAndDelete(id).exec();
	}

	async update(dto: UpdateRoomDto & { id: string }) {
		const { id, ...rest } = dto
		return this.roomModel.findOneAndUpdate({ id }, rest)
	}

}