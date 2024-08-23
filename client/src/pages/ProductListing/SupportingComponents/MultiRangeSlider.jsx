import { RangeSlider } from '@mantine/core';

function MultiRangeSlider({min,max}) {
  return (
    <div className='pb-6 px-4'>
        <RangeSlider  minRange={5} min={min} max={max} step={1} defaultValue={[min,max ]} style={{hover:"border-color-blue"}}         classNames={{
          bar: 'bg-pink-500', 
          thumb:'bg-pink-500'
        }}  />
        <div className="flex justify-center gap-8 pt-4">
               <div className="border-2 p-2">
                MIN PRICE
               </div>
               <div className="border-2 p-2">
                MAX PRICE
               </div>
               </div>
    </div>
  );
}


export default MultiRangeSlider;