import { userUtils } from "../utils/userUtils.js"

async function requester(method,url,data){
    const option = {
        method,
        headers: {}
    }

    if(userUtils.hasUser()){
        option.headers["X-Authorization"] = userUtils.getAccesToken();
    }

    if(data){
        option.headers["Content-Type"] = "Aplication/json";
        option.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, option);
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err);
        }

        if (response.status === 204) {
            return response;
        }

        return await response.json();
        
    } catch (error) {
        alert(error);

        // setTimeout (()=> alert(err), 2000);

    }

}


async function get(url) {
    return await requester("GET", url);
}

async function post(url, data){
    return await requester("POST", url, data);
}

async function update(url, data) {
    return await requester("PUT", url, data);
    
}

async function del(url) {
    return await requester("DELETE", url)
    
}

export const api = {
    get,
    post,
    update,
    del
}