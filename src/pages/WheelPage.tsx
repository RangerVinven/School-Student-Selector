import React from 'react'
import Wheel from "../components/Wheel";
import WheelNavbar from '../components/WheelNavbar';

export default function CreateWheel() {
  return (
    <div className="flex justify-center h-full">
        <div className="mt-5 w-5/6">
            <WheelNavbar />
            <br />
            <div className="flex justify-center items-center h-full">
                <Wheel />
            </div>

        </div>
    </div>
  )
}
