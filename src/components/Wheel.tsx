import React, { useState } from 'react'
import { Wheel as WinWheel } from 'react-custom-roulette';

export default function Wheel() {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<Array<Number>>([]);

    const data = [
        { option: '0' },
        { option: '1' },
        { option: '2' },
      ];
      
    return (
        <div>
            <WinWheel mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={["#3e3e3e", "df3428", "#df3428"]}
            spinDuration={0.3}
            onStopSpinning={() => setMustSpin(false)}
            />

            <div className="flex justify-evenly mt-1">
                <button className="p-1 px-2 text-white  font-bold bg-purple-500 rounded-lg" onClick={() => {
                    const winningNum = Math.floor(Math.random() * data.length);

                    //Adds the winningNum to the selectedOptions
                    setSelectedOptions([...selectedOptions, winningNum]);

                    // Makes the wheel spin
                    setPrizeNumber(winningNum);
                    setMustSpin(true);
                }}>Spin</button>

                <button className="p-1 px-2 text-white font-bold bg-purple-500 rounded-lg" onClick={() => {
                    let winningNum: number = Math.floor(Math.random() * data.length);
                    
                    // Makes sure the winningNum is unique
                    while(selectedOptions.includes(winningNum)) {
                        winningNum = Math.floor(Math.random() * data.length);
                    }
                    // Adds the winningNum to the selectedOptions
                    setSelectedOptions([...selectedOptions, winningNum]);

                    // Makes the wheel spin
                    setPrizeNumber(winningNum);
                    setMustSpin(true);
                }}>Unique Spin</button>
            </div>
        </div>
    )
}
