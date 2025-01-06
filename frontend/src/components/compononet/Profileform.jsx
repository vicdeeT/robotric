import React, { useEffect, useState } from 'react';
import { fetchUser, UpdateUserFunction, UploadImageFunction } from 'services/TeamApis';

const Profileform = () => {
    const [userDetails, setuserDetails] = useState({
        username: '',
        email: '',
        password: '',
        mobile: '',
        image: '',
    });

    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        const token = localStorage.getItem('authToken');
        const data = await fetchUser(token);
        setuserDetails(data);
        console.log('Fetched user details:', data);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setuserDetails({ ...userDetails, [name]: value });
        console.log('Updated user details:', userDetails);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        const fileURL = URL.createObjectURL(selectedFile);
        setuserDetails((prev) => ({ ...prev, image: fileURL }));
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file!');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        const token=localStorage.getItem("authToken")
        let response=await UploadImageFunction(token,formData)
        setuserDetails((prev) => ({
            ...prev,
            image: `${import.meta.env.VITE__API_Backend}${response.filePath}`,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log('Final user details submitted:', userDetails);

        try {
            const token = localStorage.getItem("authToken")
            let response = await UpdateUserFunction(token, userDetails)

        } catch (error) {
            console.error('Error updating profile:', error);

        }
    };

    return (
        <div>
            <section className="py-10 my-auto">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-gray-800/40">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-white">
                            Profile
                        </h1>
                        <h2 className="text-gray-400 text-sm mb-4">Update Profile</h2>
                        <form>
                            <div className="text-center mb-4">
                                <img
                                    className="mx-auto w-[141px] h-[141px] bg-blue-300/20 rounded-full"
                                    src={
                                        userDetails.image ||
                                        `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
                                            userDetails.email
                                        )}`
                                    }
                                    alt="Profile"
                                />
                                <div className="mt-4">
                                    <input
                                        type="file"
                                        name="image"
                                        id="upload_profile"
                                        onChange={handleFileChange}
                                        hidden
                                    />
                                    <label
                                        htmlFor="upload_profile"
                                        className="cursor-pointer text-blue-700 underline"
                                    >
                                        Upload Profile Image
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div class="w-[47%]">
                                    <label className="block text-gray-300 mb-2">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={userDetails.username}
                                        onChange={handleChange}
                                        className="p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                                    />
                                </div>
                                <div class="w-[47%]">
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={userDetails.email}
                                        disabled
                                        className="p-4 w-full border-2 rounded-lg text-gray-400 border-gray-600 bg-gray-950 cursor-not-allowed"
                                    />
                                </div>
                                <div class="w-[47%]">
                                    <label className="block text-gray-300 mb-2">Mobile</label>
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={userDetails.mobile}
                                        onChange={handleChange}
                                        className="p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                                    />
                                </div>
                                <div class="w-[47%]">
                                    <label className="block text-gray-300 mb-2">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        className="p-4 w-full border-2 rounded-lg text-gray-200 border-gray-600 bg-gray-800"
                                        placeholder='Password Hidden'
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={handleUpload}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4"
                                >
                                    Upload Image
                                </button>
                                <button
                                    type="submit"
                                    onClick={handleClick}
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profileform;