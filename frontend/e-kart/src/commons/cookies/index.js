import axios from "axios";
import React from "react";
export function createCookie(cookieName, cookieValue, daysToExpire) {
	try {
		var date = new Date();
		date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
		document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
		return true;
	} catch (error) {
		console.error("Error in creating new cookie.....", error);
		return false;
	}
}

export function accessCookie(cookieName) {
	var name = cookieName + "=";
	var allCookieArray = document.cookie.split(";");
	for (var i = 0; i < allCookieArray.length; i++) {
		var temp = allCookieArray[i].trim();
		if (temp.indexOf(name) == 0) return temp.substring(name.length, temp.length);
	}
	return "";
}

export function deleteCookie(cookieName) {
	try {
		document.cookie = cookieName + "=;";
		return true;
	} catch (error) {
		console.error("Error in deleting cookie.....", error);
		return false;
	}
}

// export function decode_tokens() {
// 	// const [firstName, setFirstName] = React.useState(null);
// 	// const [lastName, setLastName] = React.useState(null);

// 	React.useEffect(() => {
// 		fetch("htpp://localhost:5000/decode_token   ")
// 			.then(results => results.json())
// 			.then(data => {
// 				console.log(data)
// 			});
// 	}, []); // <-- Have to pass in [] here!

// 	// return ;
// }

export default {
	createCookie,
	accessCookie,
	deleteCookie
};
