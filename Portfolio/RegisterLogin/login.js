window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["myLogin"]["username"];
	var password = document.forms["myLogin"]["password"];

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const registeredUsername = urlParams.get('username');
	const registeredPassword = urlParams.get('password');

    if (username.value != registeredUsername || password.value != registeredPassword) {
        alert("Password or Username not match");
        return false;
    }
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			