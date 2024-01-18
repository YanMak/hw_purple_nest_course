import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum RoomType {
	standart,
	suit,
}

@Schema()
export class RoomModel extends Document {
	@Prop()
	roomNumber: string;

	@Prop({ type: () => RoomType })
	type: RoomType;

	@Prop({ type: Boolean, default: false })
	seaView: boolean;
}
export const RoomModelSchema = SchemaFactory.createForClass(RoomModel);