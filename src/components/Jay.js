import React from 'react'
import robot from '../img/hero-shape-2.webp'
const Jay = () => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 p-6">
            <div className="md:w-1/3">
                <img src={robot} className="rounded-full w-48 h-48 mx-auto md:mx-0 md:w-64 md:h-64 object-cover object-center" />
            </div>
            <div className="md:w-2/3 md:ml-6 flex justify-between items-start flex-col">
                <h2 className="text-gray-800 text-2xl flex justify-center items-center font-bold mb-2"><img src={robot} className="rounded-full w-48 h-48 mx-auto md:mx-0 md:w-64 md:h-64 object-cover object-center" />About Us</h2>
                <p className="text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel mauris augue. Duis venenatis nisi vel orci rutrum, in dictum sapien rhoncus. Suspendisse quis lectus sed metus gravida sodales a a eros.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Learn More</button>
            </div>
        </div>


    )
}

export default Jay