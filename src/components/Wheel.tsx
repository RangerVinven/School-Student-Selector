import React, { useState } from 'react'
import { Wheel as WinWheel } from 'react-custom-roulette';

export default function Wheel() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0)

    const data = [
        { option: '0' },
        { option: '1' },
        { option: '2' },
      ]      

      

    return (
        <div>
            <WinWheel mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={["#3e3e3e", "df3428", "#df3428"]}
            spinDuration={0.3}
            onStopSpinning={() => setMustSpin(false)}
            />

            <button className="p-1 px-2 font-bold bg-purple-500 rounded-lg" onClick={() => {
                const winningNum = Math.floor(Math.random() * data.length);
                setPrizeNumber(winningNum);
                setMustSpin(true);
            }}>Spin</button>
        </div>
    )
}
