import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateRoomDto } from './dtos/create-room.dto'
import { FilterRoomDto } from './dtos/filter-room.dto';
import { UpdateRoomDto } from './dtos/update-room.dto';
import { ROOM_NOT_FOUND } from './room.constants';
import { RoomService } from './room.service';

@Controller('review')
export class RoomController {
	constructor(private readonly roomService: RoomService) { }

	@Post('create')
	async create(@Body() dto: CreateRoomDto) {
		return this.roomService.create(dto);
	}

	@Delete(':id')
	async delete(@Param() id: string) {
		const deletedDoc = await this.roomService.delete(id);
		if (!deletedDoc) { throw new HttpException(ROOM_NOT_FOUND, HttpStatus.NOT_FOUND) }
		else {
			return deletedDoc
		}
	}

	@Patch(':id')
	async update(@Param() id: string, @Body() dto: UpdateRoomDto) {

	}

	@Get('')
	async find(@Body() dto: FilterRoomDto) {
		return this.roomService.find(dto)
	}
}
