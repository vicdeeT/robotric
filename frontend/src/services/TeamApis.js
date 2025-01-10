export const getAllUserFunction = async (token) => {
    let response = await fetch(`${import.meta.env.VITE__API_ALLUSERS}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "auth-token": token }
    })
    let parsedResponse = await response.json()
    if (parsedResponse.errors) {
        parsedResponse = { message: parsedResponse.errors }
    }
    return parsedResponse
}

export const getAlldirectUser = async (token, id) => {
    let response = await fetch(`${import.meta.env.VITE__API_AllUserWithSubUser}/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "auth-token": token }
    })
    let parsedResponse = await response.json()
    if (parsedResponse.errors) {
        parsedResponse = { message: parsedResponse.errors }
    }
    return parsedResponse
}


export const getAllTeam = async (token, id) => {
    let response = await fetch(`${import.meta.env.VITE__API_ALLteam}/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "auth-token": token }
    })
    let parsedResponse = await response.json()
    if (parsedResponse.errors) {
        parsedResponse = { message: parsedResponse.errors }
    }
    return parsedResponse
}


export const fetchUser = async (token) => {
    let response = await fetch(`${import.meta.env.VITE__API_FETCHuSER}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        }
    })
    let parsedResponse = await response.json()
    return parsedResponse
}


export const validReferall = async (id) => {
    console.log("TOKEN", id)
    let response = await fetch(`${import.meta.env.VITE__API_Valid}/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        }
    })
    let parsedResponse = await response.json()
    return parsedResponse
}


export const UpdateUserFunction = async (token, data) => {
    let response = await fetch(`${import.meta.env.VITE__API_FETCHuSER}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,

        },
        body: JSON.stringify(data)
    })
    let parsedResponse = await response.json()
    console.log(parsedResponse)
    return parsedResponse
}

export const UpdateUserById = async (id, data) => {
    console.log("data", data, id)
    const data1 = { data: data }
    console.log(JSON.stringify(data1))
    let response = await fetch(`http://localhost/api/users/user/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"

        },
        body: JSON.stringify(data1)
    })
    let parsedResponse = await response.json()
    console.log(parsedResponse)
    return parsedResponse
}

export const UploadImageFunction = async (token, formData) => {

    try {
        const response = await fetch(`${import.meta.env.VITE__API_ImageUpload}`, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            return data

        } else {
            console.error('Image upload failed');
        }
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}