import {ReactElement} from 'react';
import './TrackProgress.css';

export function TrackProgress(): ReactElement {
  return (
    <div className='track-progress'>
      <p>1:40</p>
      <div className='progress-outline'>
        <div className='progress' />
      </div>
      <p>4:55</p>
    </div>
  );
}
