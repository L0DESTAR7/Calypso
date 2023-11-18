import React, { useContext, useState } from 'react';
import WeatherContext from '../utils/WeatherContext';

type SwitchProps = {
  switchState: string,
}

export default function Switch(props: SwitchProps) {

  const weatherContext = useContext(WeatherContext);

  function handleSwitchState() {
    weatherContext.setter({
      ...weatherContext.WeatherSettings,
      [props.switchState]: !weatherContext.WeatherSettings.useMetric
    })
  }

  return (
    <div className="w-8 h-4 bg-gradient-to-br from-bunker-200 to-bunker-400 rounded-full">
      <button onClick={handleSwitchState} className="flex flex-row w-full h-full relative">
        <div className={`transition-all duration-700 absolute w-4 h-4 rounded-full bg-white
        ${!weatherContext.WeatherSettings[props.switchState] ?
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
