import { createCookie, accessCookie, deleteCookie } from './cookies'

export function setUserTokenInCookie(token) {
    var isCookieCreated = createCookie("userToken", token, 1);
    if (isCookieCreated) {
        return true;
    } else {
        return false;
    }
}

export function clearUserToken() {
    var isCookieDeleted = deleteCookie("userToken");
    if (isCookieDeleted) {
        return true;
    } else {
        return false;
    }
}

export function checkIsTokenPresentInCookie() {
    var user = accessCookie("userToken");
    if (user != "")
        return true;
    else {
        return false;
    }
}

export function getTokenFromCookie() {
    return accessCookie("userToken");
}


// return {isAuthenticated : bool, userType : string ('customer', 'vendor', 'admin')}
export function checkIsAuthenticated() {
    try {
        var isTokenPresent = checkIsTokenPresentInCookie();
        if (isTokenPresent === false) {
            return { isAuthenticated: false, userType: null };
        }
        return { isAuthenticated: true, userType: 'customer' };
    } catch (error) {
        console.error("Error in authenticating user....", error);
        return { isAuthenticated: false, userType: null };
    }
}

export default {
    setUserTokenInCookie,
    clearUserToken,
    checkIsTokenPresentInCookie,
    getTokenFromCookie,
    checkIsAuthenticated
}