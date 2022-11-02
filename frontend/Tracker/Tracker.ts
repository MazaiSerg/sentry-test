const FETCH_THROTTLE = 1_000;
const MAX_BUFFER_SIZE = 3;

type CreateTrackDto = {
  event: string;
  tags: string[];
  url: string;
  title: string;
  ts: string;
};

class Tracker {
  private tracks: CreateTrackDto[] = [];
  private lastReport: Date | undefined = undefined;
  private timeoutId: NodeJS.Timeout | undefined = undefined;

  constructor() {
    window.addEventListener('beforeunload', this.beforeUnloadListener);
  }

  track(event: string, ...tags: string[]) {
    const track = {
      event,
      tags,
      url: location.href,
      title: window.document?.title,
      ts: new Date().toISOString(),
    };
    this.add(track);
  }

  private add(track: CreateTrackDto) {
    this.tracks.push(track);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - (this.lastReport?.getTime() ?? 0);

    if (timeDiff > FETCH_THROTTLE || this.tracks.length >= MAX_BUFFER_SIZE) {
      this.lastReport = currentDate;
      this.send();
      return;
    }

    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => this.send(), FETCH_THROTTLE - timeDiff);
  }

  private async send() {
    const sendingData = this.tracks;
    this.tracks = [];
    clearTimeout(this.timeoutId);

    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendingData),
    });
  }

  private beforeUnloadListener = () => {
    clearTimeout(this.timeoutId);
    this.send();
  };
}

const tracker = new Tracker();
