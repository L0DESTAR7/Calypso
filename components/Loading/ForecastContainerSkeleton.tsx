

export default function ForecastContainerSkeleton() {
  return (
    <div className='grid grid-cols-1 content-center w-28 h-48 border-solid rounded-3xl border-4 border-bunker-300/[.66]'>
      <div className={`flex flex-col space-y-6 place-items-center text-center`}>
        <div className='w-9 h-6 bg-bunker-200 rounded-sm animate-pulse'></div>
        <div className='w-12 h-9 bg-bunker-200 rounded-sm animate-pulse'></div>
        <div className='w-20 h-7 bg-bunker-200 rounded-sm animate-pulse'></div>
      </div>
    </div >
  );
}
