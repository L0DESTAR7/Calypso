import ForecastContainerSkeleton from "./ForecastContainerSkeleton";


export default function ForecastContainerRowSkeleton() {
  return (
    <div className='grid grid-cols-3 gap-36 place-items-center mr-auto ml-auto'>
      <ForecastContainerSkeleton />
      <ForecastContainerSkeleton />
      <ForecastContainerSkeleton />
    </div>
  );
}
