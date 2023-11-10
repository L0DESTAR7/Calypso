import React, { useContext, useState } from 'react';
import WeatherContext from '../utils/WeatherContext';

type SwitchProps = {
  switchState: string,
}

export default function Switch(props: SwitchProps) {

  const [state, setState] = useState<boolean>(false);
  const weatherContext = useContext(WeatherContext);
  weatherContext[props.switchState] = !state;

  function handleSwitchState() {
    console.log("Switch state: " + props.switchState);
    setState(!state);
  }

  return (
    <div className="w-8 h-4 bg-gradient-to-br from-bunker-200 to-bunker-400 rounded-full">
      <button onClick={handleSwitchState} className="flex flex-row w-full h-full relative">
        <div className={`transition-all duration-700 absolute w-4 h-4 rounded-full bg-white
        ${state ?
            'translate-x-full'
            :
            'left-0'
          }
        `}>
          <div className="absolute left-0 w-4 h-4 bg-white rounded-full blur-md"></div>
        </div>
      </button>
    </div>
  )
}
