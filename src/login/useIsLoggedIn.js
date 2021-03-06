import { useState } from 'react';

export default function useIsLoggedIn() {
    const getIsLoggedIn = () => {
        const isLogged = JSON.parse(localStorage.getItem("isLoggedIn"));
        console.log( isLogged, "####", isLogged?.item);
        return isLogged;
    };
    const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedIn());
    const saveIsLoggedIn = isLoggedIn => {
        localStorage.setItem("isLoggedIn", isLoggedIn)
        setIsLoggedIn(isLoggedIn);
    };
    return {
        setIsLoggedIn: saveIsLoggedIn,
        isLoggedIn
    }
}