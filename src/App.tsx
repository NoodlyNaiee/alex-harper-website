import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <><div className='killmenow'>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//     </div>
//     </>
//   )
// }

// export default App

"use client"
import { ShootingStars } from "../src/components/ui/shadcn-io/shooting-stars"
const App = () => {
  return (
    <div className="killmenow bg-black">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="shooting-stars-stars-bg absolute inset-0" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h3 className="alexharpertitle text-4xl md:text-6xl font-bold text-white mb-8">Alex Harper</h3>
         <a href='https://www.youtube.com/@AlexDHarper' target="_blank" className='musicbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-white-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-red-300 relative bg-red-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            YouTube (Music)
          </button> 
        </a>
        <a href='https://www.youtube.com/@Xelianity' target="_blank" className='gamingbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-white-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-red-300 relative bg-red-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            YouTube (Gaming)
          </button>
        </a>
        <a href='https://www.youtube.com/@XelianityVODS' target="_blank" className='vodsbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-white-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-red-300 relative bg-red-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            YouTube (Stream Vods)
          </button>
        </a>
        <a href='https://www.youtube.com/@AlexHarperReacts' target="_blank" className='reactionbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-white-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-red-300 relative bg-red-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-red-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            YouTube (Reactions)
          </button>
        </a>
        <a href='https://www.instagram.com/alexdharper/' target="_blank" className='instagrambutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-yellow-300 relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-pink-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Instagram
          </button>
        </a>
        <a href='https://www.twitch.tv/xelianity' target="_blank" className='twitchbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-yellow-300 relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Twitch
          </button>
        </a>
        <a href='https://x.com/AlexDHarper' target="_blank" className='xbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-yellow-300 relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-green-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            X
          </button>
        </a>
        <a href='https://www.tiktok.com/@alexdharper' target="_blank" className='tiktokbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-yellow-300 relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-blue-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            TikTok
          </button>
        </a>
        <a href='https://www.patreon.com/AlexDHarper' target="_blank" className='patreonbutton thelinks'>
          <button className="mybutton group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-yellow-300 hover:before:[box-shadow:_20px_20px_20px_30px_#411870] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-yellow-300 relative bg-neutral-800 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-amber-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            Patreon
          </button>
        </a> 
        
      </div>
      {/* Shooting stars effect */}
      <ShootingStars
        maxDelay={3000}
        maxSpeed={35}
        minDelay={1000}
        minSpeed={15}
        starColor="#9E00FF"
        trailColor="#2EB9DF"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .shooting-stars-stars-bg {
          background-image:
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: shooting-stars-twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }
        @keyframes shooting-stars-twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `,
        }}
      />
    </div>
  )
}
export default App