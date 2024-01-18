import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { RoomModel } from 'src/room/models/room.model';

@Schema()
export class ScheduleModel extends Document {
	@Prop({ type: Types.ObjectId, ref: RoomModel.name })
	room: RoomModel;

	@Prop({ type: Date })
	date: Date;

	@Prop()
	canceled: boolean;

}
export const ScheduleModelSchema = SchemaFactory.createForClass(ScheduleModel);