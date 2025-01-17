export function Welcome() {
  return (
    <main className="h-screen flex items-center justify-center overflow-hidden relative">
      <h2 className="text-[200px] font-bold text-white/10 absolute [writing-mode:vertical-rl] -rotate-180 lg:left-56 -left-4 leading-none">
        STORM TROOPER
      </h2>
      <div className="absolute bg-transparent backdrop-blur-xl rounded-xl p-8 drop-shadow-sm border border-white/10 lg:left-1/2 top-1/2 z-20">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Star Wars Universe 🚀
        </h1>
      </div>
      <img
        src="/images/storm-trooper.webp"
        alt="logo"
        className="h-full object-contain -mr-[80%] lg:mr-0 z-10"
      />
    </main>
  );
}
