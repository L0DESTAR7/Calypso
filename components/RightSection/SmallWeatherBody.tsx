import Image from "next/image";
import HourlyForecastRow from "./HourlyForecastRow";


export default function SmallWeatherBody() {

  return (
    <div className='flex flex-row w-full h-full'>
      <div className='flex flex-col w-full h-full gap-4 items-center'>
        <div className='flex flex-row items-stretch'>
          <h1 className='text-7xl font-semibold text-bunker-800 leading-none place-self-center' suppressHydrationWarning={true}>
            20
          </h1>
          <Image className='place-self-start'
            src="Degree.svg"
            width={29}
            height={29}
            alt="Degree"
          />
          <div className='grid grid-cols-2 gap-y-2 place-self-center place-items-center ml-3'>
            <Image
              src="Wind.svg"
              alt=""
              width={31}
              height={18}
            />
            <div className='font-semibold text-xl  text-bunker-400' suppressHydrationWarning={true}>
              6.1 kph
            </div>
            <Image
              src="Humidity.svg"
              alt=""
              width={13}
              height={21}
            />
            <div className='font-semibold text-xl text-bunker-400 place-self-start' suppressHydrationWarning={true}>90 %</div>
          </div>
        </div>
        <div className='text-2xl font-bold text-bunker-400 place-self-center'>
          Feels Like 19
        </div>
        <div className="text-4xl text-bunker-400 font-extrabold">
          Cloudy
        </div>
      </div>
    </div>

  )
}
