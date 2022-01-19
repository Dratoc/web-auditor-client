import { useEffect, useState } from "react";
import {getAccessTokenApi} from "../../api/auth";
import {getUsersApi} from "../../api/user";

export default function Users(){

    const [users, setUsers] = useState([]);
    const token = getAccessTokenApi();

    useEffect( () => {
        getUsersApi(token).then(response => setUsers(response))
    }, [token])

    return (
        <div>
            <h1>estamos en usuarios</h1>
        </div>
    )
}