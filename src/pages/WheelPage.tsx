import React, { useState } from 'react'
import Wheel from "../components/Wheel";
import WheelNavbar from '../components/WheelNavbar';

export default function WheelPage() {
	const [options, setOptions] = useState([
		{ option: "Daniel" },
        { option: "Patrick" },
        { option: "Anya" },
        { option: "Mum" },
        { option: "Dad" }
	]);
	const [selectedOptions, setSelectedOptions] = useState<Array<{
		id: number,
		option: string
	}>>([]);

	return (
		<div>
			<div className="mt-5">
				<WheelNavbar />
			</div>
			<br />
				
			<div className="flex justify-center h-full w-full">
				<div className="w-1/3"></div>
				<div className="w-1/3">
					<Wheel options={options} selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />
				</div>
				<div className="w-1/3 mr-5 ml-20">
					<div className="flex flex-col">
						<div className="flex justify-between items-center mb-3">
							<h1 className="text-lg font-bold">Chosen Options</h1>
							<button className="p-1 px-1 bg-red-500 rounded-lg" onClick={() => {
								// Clears the selected options
								setSelectedOptions([]);	
							}}>Clear All</button>
						</div>

						{
							selectedOptions.map(option => {
								return (
									<div key={option.id}>
										<div className="flex justify-between items-center">
											<h1 className="text-lg">{option.option}</h1>
											<button className="p-1 px-1 bg-red-500 rounded-lg" onClick={() => {
												let newSelectedOptions = selectedOptions;

												// Gets the index of the selected option
												let index = 0;
												for (let i = 0; i < selectedOptions.length; i++) {
													if(selectedOptions[i].id === option.id) {
														index = i;
													}													
												}

												// Removes the selected option from the array
												newSelectedOptions.splice(index, 1);																								
												setSelectedOptions(newSelectedOptions);												
											}}>Clear</button>
										</div>
										<hr className="mt-1 mb-2" />
									</div>
								)
							})
						}

					</div>
				</div>
			</div>
		</div>
	)
}
