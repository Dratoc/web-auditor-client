import {basePath, apiVersion} from './config';

export function signUpApi(data){
   
    const url = `${basePath}/${apiVersion}/sign-up`;
              
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };
    
    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result =>  {        
        if(result.user){
            return { ok: true, message: `Bienvenido ${data.Name} ` }
        }
        return { ok: false, message: result.message }
    })
    .catch(error => {return { ok: false, message: error.message }});
    
}

export function signInApi(data){
    
    const url = `${basePath}/${apiVersion}/sign-in`;
              
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
        redirect: 'follow'
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {        
        return result;
    })
    .catch(error => { return error});
}

export function getUsersApi(token){

    const url = `${basePath}/${apiVersion}/users`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => {return error.message});
}