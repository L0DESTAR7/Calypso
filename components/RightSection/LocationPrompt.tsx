

export default function LocationPrompt() {
  return (
    <div className="w-96 h-10 border-bunker-300/60 border-[3px] rounded-full">
      <div className="flex flex-row w-full h-full px-4 place-items-start items-center gap-3">
        <svg width="17" height="21" fill="none" viewBox="0 0 17 21">
          <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.5 8.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke="#344D56" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 8.5c0 7.142-7.5 11.25-7.5 11.25S1 15.642 1 8.5a7.5 7.5 0 0 1 15 0Z" />
        </svg>
        <div className="text-bunker-800 font-bold text-lg">Placeholder, Earth</div>
      </div>
    </div>
  );
}
