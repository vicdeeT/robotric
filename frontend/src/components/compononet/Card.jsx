import React from 'react'

const Card = () => {
    return (
        <div className="w-96 px-6 py-6  text-center bg-blue-950 rounded-lg lg:mt-0 xl:px-10">
            <div className="space-y-4 xl:space-y-6">
                <img className="mx-auto rounded-full h-36 w-36" src="./img/bg.jpg" alt="author avatar" />
                <div className="space-y-2">
                    <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
                        <h3 className="text-white">John Doe</h3>
                        <p className="text-indigo-300">Web Developer</p>
                        <div className="flex justify-center mt-5 space-x-5">
                            <button className='w-fit rounded-md bg-fuchsia-800 text-white hover:bg-fuchsia-900 px-5 py-2'>Print ID card</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Card