import { createCookie, accessCookie, deleteCookie } from "./cookies";
import axios from "axios";
export function setUserTokenInCookie(tokenName, token) {
	var isCookieCreated = createCookie(tokenName, token, 1);
	if (isCookieCreated) {
		return true;
	} else {
		return false;
	}
}

export function clearUserToken(tokenName) {
	var isCookieDeleted = deleteCookie(tokenName);
	if (isCookieDeleted) {
		return true;
	} else {
		return false;
	}
}

export function checkIsTokenPresentInCookie(tokenName) {
	var user = accessCookie(tokenName);
	if (user != "") return true;
	else {
		return false;
	}
}

export function getTokenFromCookie(tokenName) {
	return accessCookie(tokenName);
}

// return {isAuthenticated : bool, userType : string ('customer', 'vendor', 'admin')}
export function checkIsAuthenticated() {
	try {
		var isTokenPresent = checkIsTokenPresentInCookie("userToken");
		if (isTokenPresent === false) {
			return { isAuthenticated: false, userType: null };
		}
		var userToken = getTokenFromCookie("userToken");
		var isTypePresent = checkIsTokenPresentInCookie("userType");
		if (isTypePresent === false) {
			return { isAuthenticated: false, userType: null };
		}
		var userType= getTokenFromCookie("userType");
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
