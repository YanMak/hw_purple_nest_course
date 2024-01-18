import { RoomType } from '../models/room.model';

export class FilterRoomDto {

	id_: string;

	roomNumber?: string;

	type?: RoomType;

	seaView?: boolean;
}