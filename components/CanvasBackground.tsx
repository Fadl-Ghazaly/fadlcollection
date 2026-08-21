'use client'

export default function CanvasBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle purple radial gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#A855F7]/10 blur-[150px] rounded-full" />
      {/* Cyber grid pattern overlay in purple tint */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #A855F7 1px, transparent 1px),
            linear-gradient(to bottom, #A855F7 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  )
}
