import catLogo from '/cat.png'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-white">
      <h1 className="text-5xl font-bold text-black">Purrsona</h1>
      <img src={catLogo} className="h-35 p-6 transition duration-300 hover:drop-shadow-[0_0_2em_#ffe75eaa]" alt="Cat logo" />
      
      <div className="p-4 flex gap-4">
        <button className="px-4 py-2 bg-pink-300 text-white font-medium rounded-lg hover:drop-shadow-[0_0_10px_#ff84c8aa] transition">
          Start
        </button>
        <button className="px-4 py-2 bg-pink-300 text-white font-medium rounded-lg hover:drop-shadow-[0_0_10px_#ff84c8aa] transition">
          Personalities
        </button>
      </div>
    </div>
  )
}

export default App
