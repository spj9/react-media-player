import {ReactElement} from 'react';
import {ITrack} from '../../interfaces';
import './Playlistitem.css';

interface IPlaylistItemProps {
  track: ITrack;
  isActive: boolean;
}

export function PlaylistItem({
  track,
  isActive,
}: IPlaylistItemProps): ReactElement {
  return (
    <article className={`playlist-item ${isActive ? 'active-track' : ''}`}>
      <img height={'80px'} width={'80px'} src={track.img} />
      <div className='playlist-container'>
        <h5>{track.artist}</h5>
        <p>{track.title}</p>
      </div>
      <span className='material-symbols-outlined'>play_circle</span>
    </article>
  );
}

