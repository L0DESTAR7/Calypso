
export default function CentralWeatherInfoSkeleton() {

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col gap-9'>
        <div className='flex flex-row gap-10'>
          <div className='w-72 h-64 bg-bunker-200 rounded-3xl animate-pulse'></div>
          <div className='flex flex-col gap-2'>
            <div className='w-24 h-24 bg-bunker-200 rounded-xl animate-pulse'></div>
            <div className='grid grid-cols-1 gap-y-7 ml-32 place-self-center place-items-center'>
              <div className='w-40 h-14 bg-bunker-200 rounded-lg animate-pulse'></div>
              <div className='w-40 h-14 bg-bunker-200 rounded-lg animate-pulse'></div>
            </div>
          </div>
        </div>
        <div className='w-[40rem] h-16 rounded-2xl bg-bunker-200 animate-pulse place-self-center'>
        </div>
      </div>
    </div>
  );
}
