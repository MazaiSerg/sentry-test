import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './track.entity';
import { Model } from 'mongoose';
import { CreateTrackDto } from '../../../dto/CreateTrack.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
  ) {}

  async create(
    createTrackDto: CreateTrackDto | CreateTrackDto[],
  ): Promise<Track | Track[]> {
    const tracks = await this.trackModel.create(createTrackDto);
    return tracks.save();
  }
}
