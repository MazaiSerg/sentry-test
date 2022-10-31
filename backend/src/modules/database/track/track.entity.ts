import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop(String)
  event: string;

  @Prop([String])
  tags: string[];

  @Prop(String)
  url: string;

  @Prop(String)
  title: string;

  @Prop(Date)
  ts: Date;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
