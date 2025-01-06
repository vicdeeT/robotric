import { useEffect, useState } from "react"
import { fetchUser, getAlldirectUser } from "services/TeamApis"

const DirectTeam = () => {
    const [allUsers, setallUsers] = useState([])
    const [fetchUserDetails, setfetchUserDetails] = useState({referrerId: '', username: '', email: '', referrerId:'', mobile: '' })
    useEffect(() => {
        fetchallUsers()
    }, [])

    const fetchallUsers = async () => {
        const token = localStorage.getItem("authToken")
        let user = await fetchUser(token)
        console.log("user",user)
        setfetchUserDetails(user)

        let response = await getAlldirectUser(token, user?.userId)
        setallUsers(response)
        console.log(response)
    }

    return (
        <>
            <div>Direct Team</div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs  uppercase bg-blue-900  text-gray-400">
                        <tr> <th scope="col" className="px-6 py-3">
                            userId
                        </th>
                            <th scope="col" className="px-6 py-3">
                                UserName
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Referral No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.length < 1 ? <span className="text-red-500 text-xl text-center">
                            <span className="mt-4">No Data Found!</span>
                        </span> :

                            allUsers.map((item) => (
                                <tr className="border-b bg-blue-950 border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                                        {item.userId}

                                    </th>
                                    <td className="px-6 py-4">{item.username}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.referrals.length < 1 ? "NA" : item.referrals.length}
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(item.date).toDateString()}
                                    </td>
                                </tr>

                            ))}



                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DirectTeam