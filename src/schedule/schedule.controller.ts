import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CancelScheduleDto } from './dtos/cancel-schedule.dto';
import { CreateScheduleDto } from './dtos/create-schedule.dto';
import { FilterScheduleDto } from './dtos/filter-schedule.dto';
import { SCHEDULE_NOT_FOUND } from './schedule.constants';
import { ScheduleService } from './schedule.service';

@Controller('review')
export class ScheduleController {
	constructor(private readonly scheduleService: ScheduleService) { }

	@Post('create')
	async create(@Body() dto: CreateScheduleDto) {
		return this.scheduleService.create(dto)
	}

	@Delete()
	async cancel(@Body() dto: CancelScheduleDto) {
		const deletedSchedule = await this.scheduleService.cancel(dto.roomId, dto.date);
		if (!deletedSchedule) { throw new HttpException(SCHEDULE_NOT_FOUND, HttpStatus.NOT_FOUND) }
		else {
			return deletedSchedule
		}
	}

	@Get('byRoom/:roomId')
	async getByProduct(@Param() productId: string) {
		return this.scheduleService.findByRoomId;
	}

	@Get('')
	async getByfilter(@Param() dto: FilterScheduleDto) {
		if (dto.date) {
			return this.scheduleService.findByDate(dto.date);
		}
		if (dto.roomId) {
			return this.scheduleService.findByRoomId(dto.roomId);
		}
	}
}
