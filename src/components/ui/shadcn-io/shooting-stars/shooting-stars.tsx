"use client"
import { ShootingStars } from "../shooting-stars/index"
const Stupid = () => {
  return (
    <div className="h-[40rem] w-full bg-black relative overflow-hidden rounded-lg">
      {/* Background with stars */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]" />
        <div className="shooting-stars-stars-bg absolute inset-0" />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Shooting Stars</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
          A mesmerizing background effect for shadcn.io with customizable shooting stars
        </p>
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
export default Stupid
