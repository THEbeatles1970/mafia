import { useState } from 'react'

const MAX_PLAYERS = 6

function PlayerReg({ onBack }) {
  const [players, setPlayers] = useState([])
  const [name, setName] = useState('')
  const [showLimitPopup, setShowLimitPopup] = useState(false)

  const addPlayer = () => {
    const trimmed = name.trim()
    if (!trimmed) return

    if (players.length >= MAX_PLAYERS) {
      setShowLimitPopup(true)
      return
    }

    setPlayers((prev) => [...prev, trimmed])
    setName('')
  }

  const removePlayer = (index) => {
    setPlayers((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPlayer()
  }

  return (
    <main className="min-h-svh bg-neutral-950 px-6 py-10 text-white">
      <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
        <button
          className="w-fit rounded-md border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          type="button"
          onClick={onBack}
        >
          Back
        </button>

        <div>
          <h1 className="font-serif text-4xl font-bold text-yellow-400">
            Player Registration
          </h1>
          <p className="mt-2 text-neutral-300">
            Add the from 4-6 players before starting the mafia game.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-200">
            Player name
            <input
              className="rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-neutral-500 focus:border-yellow-400"
              placeholder="Enter player name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <button
            className="rounded-md bg-yellow-600 px-6 py-3 font-semibold text-white shadow-lg shadow-yellow-950/40 transition hover:bg-yellow-700"
            type="submit"
          >
            Add Player
          </button>
        </form>

        {players.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Registered Players ({players.length})
            </h3>
            <ul className="space-y-1">
              {players.map((player, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between rounded-md border border-white/15 bg-white/10 px-4 py-3"
                >
                  <span>{player}</span>
                  <button
                    className="rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white hover:bg-red-700"
                    type="button"
                    onClick={() => removePlayer(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {players.length >= 4 && (
          <button
            className="rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white hover:bg-red-700"
            type="button"
            onClick={() => setPage('rollet')}
          >
            start a Game
          </button>
        )}
      </section>

      {showLimitPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="presentation"
          onClick={() => setShowLimitPopup(false)}
        >
          <div
            className="w-full max-w-sm rounded-lg border border-yellow-400/30 bg-neutral-900 p-6 text-center shadow-2xl shadow-black/50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="limit-popup-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="font-serif text-2xl font-bold text-yellow-400"
              id="limit-popup-title"
            >
              Player Limit Reached
            </h2>
            <p className="mt-3 text-neutral-200">
              Maximum 6 players allowed.
            </p>
            <button
              className="mt-6 rounded-md bg-yellow-600 px-6 py-2 font-semibold text-white shadow-lg shadow-yellow-950/40 transition hover:bg-yellow-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
              type="button"
              onClick={() => setShowLimitPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default PlayerReg
