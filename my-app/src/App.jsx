import './App.css'
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp'
import mafiaVideo from './assets/download.mp4'

function App() {
  return (
    <main className="video-page min-h-svh w-full bg-neutral-950 text-white">
      <video
        className="mafia-video w-full max-w-3xl rounded-lg shadow-2xl"
        src={mafiaVideo}
        autoPlay
        muted
        
        playsInline
      />
      <button
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-red-600 px-8 py-3 font-semibold text-white shadow-lg shadow-red-950/40 transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
        type="button"
      >
        <span class="font-bold">Play</span>
        <PlayCircleOutlineSharpIcon className="button-icon" />
      </button>
    </main>
  )
}

export default App
