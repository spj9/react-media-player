import {ReactElement} from 'react';
import './Playlist.css';
import {tracks} from '../../data';
import {PlaylistItem} from './PlaylistItem';

export function Playlist(): ReactElement {
  return (
    <section className='playlist'>
      {tracks.map((track, idx) => (
        <PlaylistItem key={track.id} track={track} isActive={idx === 2} />
      ))}
    </section>
  );
}
