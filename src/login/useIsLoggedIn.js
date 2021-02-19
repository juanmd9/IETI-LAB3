import { useState } from 'react';

export default function useIsLoggedIn() {
    const getIsLoggedIn = () => {

        const item=localStorage.getItem("isLoggedIn");
        const isLogged = JSON.parse(item);
        console.log(item, "+++++++", isLogged);
        return isLogged?.item;
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