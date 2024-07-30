import {ReactElement} from 'react';
import './Player.css';
import {ISong} from '../../interfaces';
import {NowPlaying} from './NowPlaying';
import {TrackProgress} from './TrackProgress';
import {ControlPanel} from './ControlPanel';

interface IPlayerProps {
  song: ISong;
}

export function Player({song}: IPlayerProps): ReactElement {
  return (
    <section className='player'>
      <div className='img' style={{backgroundImage: `url(${song.img}`}} />
      <NowPlaying artist={song.artist} title={song.title} />
      <TrackProgress />
      <ControlPanel />
    </section>
  );
}
