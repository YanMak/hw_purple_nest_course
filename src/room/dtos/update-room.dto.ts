import { RoomType } from '../models/room.model';

export class UpdateRoomDto {
	roomNumber?: string;

	type?: RoomType;

	seaView?: boolean;
}