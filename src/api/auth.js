import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constans";
import {basePath, apiVersion} from "./config";
import jwtDecode from "jwt-decode";

export function getAccessTokenApi(){    
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if(!accessToken || accessToken === "null"){
        return null;
    }
    return willExpireToken(accessToken) ? null : accessToken;
}

export function getRefreshTokenApi(){
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    if(!refreshToken || refreshToken === "null"){
        return null;
    }

    return willExpireToken(refreshToken) ? null : refreshToken;

}

export function refreshAccessTokenApi(refreshToken){
    
    const url = `${basePath}/${apiVersion}/refresh-access-token`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const bodyObj = {
        refreshToken: refreshToken
    }
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(bodyObj),
        redirect: 'follow'
    };

    return fetch(url, requestOptions)
    .then(response => {
        if(response.status !== 200){
            return null;
        }

        return response.json();
    })
    .then(result => {        
        if(!result){
            logout();
        }else{
            const {accessToken, refreshToken} = result;
            localStorage.setItem(ACCESS_TOKEN, accessToken);
            localStorage.setItem(REFRESH_TOKEN, refreshToken);
        }
    })
    .catch(error => error.message);

}

export function logout(){
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
}

function willExpireToken(token){

    const seconds = 60;
    const metaToken = jwtDecode(token);
    const { exp } = metaToken;
    const now = (Date.now() + seconds) / 1000;

    return now > exp;
}
