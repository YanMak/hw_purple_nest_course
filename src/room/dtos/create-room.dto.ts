import { RoomType } from '../models/room.model';

export class CreateRoomDto {
	roomNumber: string;

	type: RoomType;

	seaView?: boolean;
}