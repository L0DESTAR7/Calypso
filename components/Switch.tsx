import React, { useState } from 'react';


export default function Switch() {

  const [switchState, setSwitchState] = useState<boolean>(false);

  function handleSwitchState() {
    console.log("Switch state: " + switchState);
    setSwitchState(!switchState);
  }

  return (
    <div className="w-8 h-4 bg-gradient-to-br from-bunker-200 to-bunker-400 rounded-full">
      <button onClick={handleSwitchState} className="flex flex-row w-full h-full relative">
        <div className={`transition-all duration-700 absolute w-4 h-4 rounded-full bg-white
        ${switchState ?
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
