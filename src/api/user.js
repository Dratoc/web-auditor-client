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
            return { ok: true, message: `Register Sucessfully, welcome ${data.name} ` }
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

export function uploadAvatarApi(token, avatar, userId){
    const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`;
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var formdata = new FormData();
    formdata.append("avatar", avatar, avatar.name);

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => { return result })
    .catch(error => {return error.message});
}

export function getAvatarApi(avatarName){
    const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    return fetch(url, requestOptions)
        .then(response => response.url )
        .catch(error => {return error});
}

export function updateUserApi(token, user, userId){
    const url = `${basePath}/${apiVersion}/update-user/${userId}`;
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(user);

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => {return error.message});
}