import { useState } from 'react';
import Switch from '../Switch';


export default function Settings() {

  const [showSettings, setShowSettings] = useState<boolean | undefined>(false);

  function toggleShowSettings() {
    setShowSettings(!showSettings);
  }

  return (
    <div className={`transition-all ease-in-out duration-1000 flex flex-row place-items-center z-[0]
      ${!showSettings ? 'translate-x-48' : ''}
    `}>
      <div className={`transition-all duration-700 grid place-items-center bg-bunker-500
        ${!showSettings ? 'w-10 h-10 rounded-l-md' : 'w-7 h-11 rounded-l-lg'}
      `}>
        <button onClick={toggleShowSettings} className='grid grid-cols-1 w-full h-full place-items-center items-center'>
          {!showSettings ?
            <svg width="25" height="25" fill="none" viewBox="0 0 25 25" className={`animate-spinslow transition-all}`}>
              <path fill="#F2F9F9" d="M22.24 12.33a9.013 9.013 0 0 0 0-.5l1.722-2.151a.924.924 0 0 0 .17-.815 12.42 12.42 0 0 0-1.255-3.03.923.923 0 0 0-.693-.454l-2.738-.305a9.167 9.167 0 0 0-.347-.346l-.323-2.746a.923.923 0 0 0-.455-.692c-.95-.55-1.969-.972-3.03-1.254a.924.924 0 0 0-.815.17L12.33 1.922h-.5L9.68.202a.924.924 0 0 0-.815-.17c-1.061.282-2.08.705-3.03 1.255a.923.923 0 0 0-.454.693l-.305 2.743c-.12.115-.235.23-.346.346l-2.746.315a.924.924 0 0 0-.692.455C.74 6.79.319 7.81.036 8.87a.924.924 0 0 0 .172.816L1.92 11.83v.499L.202 14.482a.924.924 0 0 0-.17.815c.282 1.06.705 2.08 1.255 3.03a.923.923 0 0 0 .693.454l2.738.305c.115.12.23.235.347.346l.32 2.745a.924.924 0 0 0 .454.693c.95.55 1.97.972 3.03 1.255a.923.923 0 0 0 .816-.172l2.146-1.714c.166.005.332.005.499 0l2.152 1.723a.924.924 0 0 0 .815.17 12.373 12.373 0 0 0 3.03-1.255.923.923 0 0 0 .454-.693l.305-2.738c.12-.114.235-.23.346-.347l2.745-.323a.923.923 0 0 0 .693-.455c.55-.95.972-1.97 1.255-3.03a.923.923 0 0 0-.172-.815l-1.714-2.146Zm-10.16 4.368a4.618 4.618 0 1 1 0-9.236 4.618 4.618 0 0 1 0 9.236Z" />
            </svg>
            :
            <svg width="12" height="13" fill="none" viewBox="0 0 12 13" className='my-auto'>
              <path fill="#F2F9F9" d="m6.407 6.876-5.312 5.312a.531.531 0 1 1-.752-.752L5.28 6.5.343 1.563a.532.532 0 0 1 .752-.752l5.312 5.313a.531.531 0 0 1 0 .752Zm5.313-.752L6.407.811a.532.532 0 1 0-.752.752L10.593 6.5l-4.938 4.936a.532.532 0 0 0 .752.752l5.313-5.312a.532.532 0 0 0 0-.752Z" />
            </svg>
          }
        </button>
      </div>
      <div className={`w-48 h-48 bg-bunker-500 rounded-l-lg
      ${!showSettings ? 'delay-1000 invisible' : 'visible'}
      `}>
        <div className={`flex flex-col space-y-5 place-items-center items-center py-2 px-1`}>
          <div className={`text-bunker-50 text-xl`}>Settings</div>
          <div className={`grid grid-cols-3 place-items-center text-bunker-50 font-bold text-sm`}>
            <div>METRIC</div>
            <Switch switchState="useMetric" />
            <div>IMPERIAL</div>
          </div>
        </div>
      </div>
    </div>
  );


}
