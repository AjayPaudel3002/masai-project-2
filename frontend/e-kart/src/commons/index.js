import { createCookie, accessCookie, deleteCookie } from "./cookies";
import axios from "axios";
export function setUserTokenInCookie(userType, token) {
	var isCookieCreated = createCookie(userType, token, 1);
	if (isCookieCreated) {
		return true;
	} else {
		return false;
	}
}

export function clearUserToken(userType) {
	var isCookieDeleted = deleteCookie(userType);
	if (isCookieDeleted) {
		return true;
	} else {
		return false;
	}
}

export function checkIsTokenPresentInCookie(userType) {
	var user = accessCookie(userType);
	if (user != "") return true;
	else {
		return false;
	}
}

export function getTokenFromCookie(userType) {
	return accessCookie(userType);
}

// return {isAuthenticated : bool, userType : string ('customer', 'vendor', 'admin')}
export function checkIsAuthenticated(userType) {
	try {
		var isTokenPresent = checkIsTokenPresentInCookie(userType);
		var userToken = getTokenFromCookie(userType);
		console.log(userToken, isTokenPresent);
		// var userType = decode_tokens()
		if (isTokenPresent === false) {
			return { isAuthenticated: false, userType: null };
		}
		return { isAuthenticated: true, userType: userType, userToken: userToken };
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
};
