import {Navbar, Player, Playlist} from './components';
import {tracks} from './data';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Playlist />
        <Player song={tracks[1]} />
      </main>
    </>
  );
}
