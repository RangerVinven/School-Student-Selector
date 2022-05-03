import React, { useState } from 'react'
import { Wheel as WinWheel } from 'react-custom-roulette';

interface Props {
    options: { option: string }[],

    selectedOptions: {
        id: number,
		option: string
    }[],
    setSelectedOptions: Function
}

export default function Wheel(props: Props) {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    
    // Checks if the winningNum (the index for the option that will be chosen) is unique
    const winningNumIsUnique = (num: number) => {
        let unique = true;
        
        // Loops through the selected options and returns false if the option has been chosen already
        props.selectedOptions.forEach(option => {
            if(option.option === props.options[num].option) {
                unique = false;
            }
        });

        return unique;
    }

    return (
        <div>
            <WinWheel mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={props.options}
            backgroundColors={["green", "red", "teal", "violet", "orange"]}
            spinDuration={0.3}
            onStopSpinning={() => {
                setMustSpin(false);

                // Adds the winning option to the selectedOptions
                props.setSelectedOptions([...props.selectedOptions, {
                    id: Date.now(),
                    option: props.options[prizeNumber].option
                }]);                
            }}
            />

            <div className="flex justify-evenly mt-1">
                <button className="p-1 px-2 text-white  font-bold bg-purple-500 rounded-lg" onClick={() => {
                    const winningNum = Math.floor(Math.random() * props.options.length);

                    // Makes the wheel spin
                    setPrizeNumber(winningNum);
                    setMustSpin(true);
                }}>Spin</button>

                <button className="p-1 px-2 text-white font-bold bg-purple-500 rounded-lg" onClick={() => {
                    let winningNum: number = Math.floor(Math.random() * props.options.length);
                    let counter = 0;

                    // Makes sure the winning number is unique
                    let isUnique = winningNumIsUnique(winningNum);                    
                    while(!isUnique) {
                        const oldNum = winningNum;
                        while(winningNum === oldNum) {
                            winningNum = Math.floor(Math.random() * props.options.length);
                        }
                        
                        isUnique = winningNumIsUnique(winningNum);

                        // Breaks out of the function if all options have been selected
                        if(counter > props.options.length) {
                            alert("All options have been selected");
                            return;
                        }
                        counter++;
                    }
                    
                    // Makes the wheel spin
                    setPrizeNumber(winningNum);
                    setMustSpin(true);

                }}>Unique Spin</button>
            </div>
        </div>
    )
}
