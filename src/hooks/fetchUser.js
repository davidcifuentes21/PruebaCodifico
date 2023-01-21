import { useEffect, useState } from "react";
import { getUser } from "../helpers/getUser";

export const fetchUser = (usr) => {

    const [userInfo, setUserInfo] = useState([]);
    

    const getUserInfo = async() => {
        if(usr !== undefined){
            const newUser = await getUser(usr);
            setUserInfo(newUser);
        }
    }

    useEffect(() => {
        getUserInfo();
    
    }, [])

    return {userInfo}
}
