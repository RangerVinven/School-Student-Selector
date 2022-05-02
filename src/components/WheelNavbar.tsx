import React from 'react'

export default function WheelNavbar() {
  return (
    <div>
        <ul className="flex justify-evenly">
            <li><button className="bg-green-400 text-white font-bold p-1 rounded-lg">Wheel</button></li>
            <li><button className="bg-gray-400 text-white font-bold p-1 rounded-lg">Wheel Options</button></li>
            <li><button className="bg-gray-400 text-white font-bold p-1 rounded-lg">Settings</button></li>
        </ul>
    </div>
  )
}
