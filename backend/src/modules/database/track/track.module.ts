import { Module } from '@nestjs/common';
import { Track, TrackSchema } from './track.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  controllers: [TrackController],
  providers: [TrackService],
})
export class TrackModule {}
