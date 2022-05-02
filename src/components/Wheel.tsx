import React, { useState } from 'react'
import { Wheel as WinWheel } from 'react-custom-roulette';

interface Props {
    options: { option: string }[],

    selectedOptions: string[],
    setSelectedOptions: Function
}

export default function Wheel(props: Props) {
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    
    // // Checks if the winningNum (the index for the option that will be chosen) is unique
    // const winningNumIsUnique = (num: number) => {
    //     props.selectedOptions.forEach(selectedOption => {
    //         if(selectedOption.optionName === props.options[num].option) {
    //             return false;
    //         }
    //     });

    //     return true;
    // }

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
                props.setSelectedOptions([...props.selectedOptions, props.options[prizeNumber].option]);
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

                    // Makes sure the winningNum is unique
                    while(props.selectedOptions.includes(props.options[winningNum].option)) {
                        counter++;
                        winningNum = Math.floor(Math.random() * props.options.length);

                        // Breaks out of the loop if all the options have been selected
                        if(counter > props.options.length) {
                            alert("All options have been selected");
                            return;
                        }
                    }

                    // Makes the wheel spin
                    setPrizeNumber(winningNum);
                    setMustSpin(true);
                }}>Unique Spin</button>
            </div>
        </div>
    )
}
