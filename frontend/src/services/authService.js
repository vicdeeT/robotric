export const loginFunction = async (data) => {
    let response = await fetch(`${import.meta.env.VITE__API_LOGINAPI}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    let parsedResponse = await response.json()
    if (parsedResponse.errors) {
        parsedResponse = { message: parsedResponse.errors }
    }
    return parsedResponse
}


export const signUpFunction = async (data) => {
    let response = fetch(`${import.meta.env.VITE__API_SIGNUPAPI}`, {
        method: "POST",
        body: JSON.stringify({ referrerId: data?.referrerId, email: data?.email, username: data?.name, password: data?.password ,mobile:data?.mobile}),
        headers: { "Content-Type": "application/json" }
    })
    let parsedResponse = await response.json()
    if (parsedResponse.errors) {
        parsedResponse = { error: parsedResponse.errors }
    }
    return parsedResponse
}


export const fetchUser = async (token) => {
    let response = await fetch(`${import.meta.env.VITE__API_FETCHuSER }`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        }
    })
    let parsedResponse = await response.json()
    return parsedResponse
}
