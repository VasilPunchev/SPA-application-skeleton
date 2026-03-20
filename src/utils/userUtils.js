function setUserData(userData) {
    // TODO: check for extra info from userData

 const userInfo = { 
    email: userData.email,
    id: userData._id,
    accessToken: userData.accessToken
 }
 
 sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
 
}

function getUserData() {
    const userInfo = sessionStorage.getItem("userInfo");

    return userInfo && JSON.parse(userInfo)
}

function getUserId() {
     return getUserData()?.id 
}

function getAcessToken() {
    return getUserData()?.accessToken
}

function clear() {
    sessionStorage.removeItem("userInfo");
}

function hasUser() {
    return !! getUserData();
}

function isOwner() {
    return itemOfOwnerId === getUserId();
}

export const userUtils = {
    setUserData,
    getUserId,
    getAcessToken,
    clear,
    hasUser,
    isOwner
}