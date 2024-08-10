import { RangeSlider } from '@mantine/core';

function MultiRangeSlider({min,max}) {
  return (
    <>
        <RangeSlider minRange={5} min={min} max={max} step={1} defaultValue={[min,max ]} />
        <div className="flex gap-4">
               <div className="border-2">
                MIN PRICE
               </div>
               <div className="border-2">
                MAX PRICE
               </div>
               </div>
    </>
  );
}


export default MultiRangeSlider;