'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative">
      {/* Spotlight wrapper to prevent it from overflowing the card */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>
      
      <div className="flex h-full relative z-10">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center pointer-events-none">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pointer-events-auto">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg pointer-events-auto">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative z-0">
          {/* Make the Spline container wider so the camera doesn't crop the hands */}
          <div className="absolute right-0 top-0 bottom-0 w-[150%] md:w-[150%]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
