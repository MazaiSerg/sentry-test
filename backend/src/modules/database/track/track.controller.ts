import { Body, Controller, Inject, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TrackService } from './track.service';
import { CreateTrackDto } from '../../../dto/CreateTrack.dto';
import { CreateTrackValidationPipe } from '../../../dto/CreateTrackValidationPipe';

@Controller('tracks')
export class TrackController {
  constructor(
    @Inject(TrackService) private readonly trackService: TrackService,
  ) {}

  @Post()
  async insertTrack(
    @Body(new CreateTrackValidationPipe())
    body: CreateTrackDto | CreateTrackDto[],
    @Res() res: Response,
  ) {
    res.status(200).send();
    try {
      await this.trackService.create(body);
    } catch (e) {
      console.error(JSON.stringify(e));
    }
  }
}
