import { useState } from "react";

export default function useToken() {

    // Gets the user's token from the sessionStorage
    const getToken = () => {
        const tokenString: any = localStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken?.token;
    }

    const [token, setToken] = useState(getToken());

    // Saves the user's token to the sessionStorage
    const saveToken = (userToken: any) => {
        localStorage.setItem("token", userToken);
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token
    }
}