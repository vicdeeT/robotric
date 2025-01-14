import React, { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUser, getAllTeam, getAllUserFunction, getAlldirectUser } from "services/TeamApis"
import Card from './Card'

const HomeComponent = () => {
    const id = '0x29b6f7FBD564e59Bc60B5f398f72df673394252f'

    const handleClick = (text) => {
        console.log(text)
        navigator.clipboard.writeText(text);
    }



    const [allUsers, setallUsers] = useState([])
    const [allUsersTeam, setallUsersTeam] = useState([])
    const [fetchUserDetails, setfetchUserDetails] = useState({ referrerId: '', username: '', email: '', referrals: '', mobile: '', userId: "" })


    useEffect(() => {
        fetchallUsers()
    }, [])
    useEffect(() => {
        fetchallUsersAll()
    }, [])


    const fetchallUsersAll = async () => {
        const token = localStorage.getItem("authToken")
        const user = await fetchUser(token)
        const response = await getAllTeam(token, user.userId)
        setallUsersTeam(response)
        setfetchUserDetails(user)
        console.log("alluserteam", allUsersTeam)
    }

    const fetchallUsers = async () => {
        const token = localStorage.getItem("authToken")
        let user = await fetchUser(token)
        let response = await getAlldirectUser(token, user?.userId)
        setallUsers(response)
        console.log("ALLDIRECT", allUsers)
    }


    return (

        <section id="testimonies" className="py-20 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-600 bg-fuchsia-700">

<div className="card flex justify-center bg-transparent border-none items-center"><Card/> </div>   

        <div className="mx-8 md:mx-10 lg:mx-20 xl:mx-24">


                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

                    <ul className="space-y-8 sm:block">
                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">Welcome, {fetchUserDetails.username}</h3>
                                            <p className="text-fuchsia-700 text-lg font-semibold my-3">{'RT' + fetchUserDetails.userId}</p>
                                        </div>
                                    </div>
                                    <p className="leading-normal text-gray-300 text-xl">Welcome to Our Robotric Family</p>
                                    <button className='w-fit px-3 py-3 cursor-pointer bg-fuchsia-800 hover:bg-fuchsia-950 rounded-md' onClick={() => {
                                        handleClick(`${import.meta.env.VITE_API_SIGN_UP}/RT${fetchUserDetails.userId}`)
                                    }}>Copy and Refer</button>
                                </div>
                            </div>
                        </li>



                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="font-semibold text-white text-xl">Team Overview</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>
                                        <div className='flex justify-between'>
                                            <span className='text-lg'>Teams</span>
                                            <span className='text-lg'>Total</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/network/directTeams"} className='text-white hover:font-semibold hover:text-white'>Direct</Link>
                                            <Link to={"/network/directTeams"} className='text-white hover:font-semibold hover:text-white'>{!allUsers ? 0 : allUsers.length}</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/network/allTeams"} className='text-white hover:font-semibold hover:text-white'>Indirect</Link>
                                            <Link to={"/network/allTeams"} className='text-white hover:font-semibold hover:text-white'>{!allUsersTeam ? 0 : allUsersTeam.length}</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <span className='text-md font-semibold'>Total</span>
                                            <span className='text-md font-semibold'>{allUsers.length + allUsersTeam.length}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="text-sm leading-6 hidden">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <h3 className="font-semibold text-white text-xl">All Income</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Bot Trading Monthly Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Life Time Reward Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0.00</Link>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Bot Trading Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Profit Sharing Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>


                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <h3 className="font-semibold text-white text-xl">Team Business Overview</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>
                                                Strong Leg ID</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>__</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Strong Leg</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0.0</Link>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Total Business
                                            </Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Today Business
                                            </Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <ul className="space-y-8">


                        <li className="text-sm leading-6 my-auto">
                            <div className="relative group lg:mt-24">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex flex-col items-center space-x-4">
                                        <img
                                            src="./qrcode.jpg"
                                            className="" alt="QR CODE" />

                                    </div>
                                    <div className='flex flex-col space-y-4'>
                                        <span></span>
                                        <span className='text-lg'>Deposit by scanning this QR Code</span>
                                        <span className='bg-fuchsia-950 w-fit py-3 px-3 rounded-md cursor-text overflow-x-scroll'>{id}</span>
                                        <button className='w-fit px-3 py-3 cursor-pointer bg-fuchsia-800 hover:bg-fuchsia-950 rounded-md' onClick={() => {
                                            handleClick(id)
                                        }}>Copy</button>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li className="text-sm leading-6 lg:hidden hidden md:block">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="font-semibold text-white text-xl">Account Overview</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>
                                        <div className='flex justify-between items-center bg-fuchsia-900 py-2 rounded-lg cursor-pointer hover:bg-fuchsia-950'>
                                            <span className='text-md text-center font-semibold mx-auto'>Last login 01/jan/25</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>__</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Activation</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>1/1/22</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Registration</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-md text-white hover:font-semibold hover:text-white'>In-Activate</Link>
                                            <Link to={"/dashboard"} className='text-md text-white hover:font-semibold hover:text-white'>Bot Status</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>



                    </ul>


                    <ul className="space-y-8 lg:block hidden">
                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <h3 className="font-semibold text-white text-xl">Account Overview</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>
                                        <div className='flex justify-between items-center bg-fuchsia-900 py-2 rounded-lg cursor-pointer hover:bg-fuchsia-950'>
                                            <span className='text-md text-center font-semibold mx-auto'>Last login 01/jan/25</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>__</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Activation</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>1/1/22</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Registration</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-md text-white hover:font-semibold hover:text-white'>In-Activate</Link>
                                            <Link to={"/dashboard"} className='text-md text-white hover:font-semibold hover:text-white'>Bot Status</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="text-sm leading-6 hidden">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <h3 className="font-semibold text-white text-xl">My Wallet</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>My Wallets</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Deposit Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0.00</Link>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Fxstock Walllet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Trading Profit Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Cashback Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>FXST Pay Walle</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>


                        {/* 
                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div><a href="https://twitter.com/dan_schulman" className="cursor-pointer">
                                    <div
                                        className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5">
                                        <div className="flex items-center space-x-4"><img
                                            src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                                            className="w-12 h-12 bg-center bg-cover border rounded-full" alt="Dan Schulman" />
                                            <div>
                                                <h3 className="text-lg font-semibold text-white">Dan Schulman</h3>
                                                <p className="text-gray-500 text-md">CEO of PayPal</p>
                                            </div>
                                        </div>
                                        <p className="leading-normal text-gray-300 text-md">Quam pellentesque nec nam aliquam sem
                                            et tortor consequat id. Enim sit amet venenatis urna cursus.</p>
                                    </div>
                                </a>
                            </div>
                        </li> */}
                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <h3 className="font-semibold text-white text-xl">My Wallet</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>My Wallets</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Deposit Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0.00</Link>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Fxstock Walllet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Trading Profit Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Cashback Wallet</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>FXST Pay Walle</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="text-sm leading-6">
                            <div className="relative group">
                                <div
                                    className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200">
                                </div>
                                <div
                                    className="relative p-6 space-y-6 leading-none rounded-lg bg-blue-950 ring-1 ring-gray-900/5 hover:shadow-lg hover:shadow-blue-900">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-4">
                                            <div>
                                                <h3 className="font-semibold text-white text-xl">All Income</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-4 text-md leading-normal">
                                        <div></div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Bot Trading Monthly Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Life Time Reward Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0.00</Link>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Bot Trading Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>
                                        <div className='flex justify-between'>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>Profit Sharing Income</Link>
                                            <Link to={"/dashboard"} className='text-white hover:font-semibold hover:text-white'>$0</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>


                </div>
            </div>
        </section>)


}

export default HomeComponent