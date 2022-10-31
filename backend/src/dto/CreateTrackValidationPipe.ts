import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CreateTrackDto } from './CreateTrack.dto';

type CreateTrackSerialized = {
  [Property in keyof CreateTrackDto]?: CreateTrackDto[Property] extends Date
    ? string
    : CreateTrackDto[Property];
};

@Injectable()
export class CreateTrackValidationPipe implements PipeTransform {
  transform(tracks: (CreateTrackSerialized | undefined)[] | undefined) {
    if (!tracks) throw new BadRequestException('Undefined data');

    tracks.forEach((track) => {
      if (!track) throw new BadRequestException('Undefined object in array');
      if (
        typeof track.title !== 'string' ||
        typeof track.url !== 'string' ||
        typeof track.event !== 'string' ||
        !Array.isArray(track.tags) ||
        Number.isNaN(Date.parse(track.ts))
      ) {
        throw new BadRequestException('Validation failed');
      }
    });

    return tracks;
  }
}
