import './App.css'
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import mafiaVideo from './assets/download.mp4'


function App() {
  return (
    <>
      <main className="video-page">
        <video
          className="mafia-video"
          src={mafiaVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <button
          className="submit-btn"
          onClick={() => {
            setTimeout(() => {}, 800);
          }}
        >
          
          {/* create a shadow on the butto */}
          <div className="button-shadow text-"> Play</div>
         <PlayCircleOutlineSharpIcon className='button-icon'/>
        </button>
      </main>
    </>
  )
}

export default App
