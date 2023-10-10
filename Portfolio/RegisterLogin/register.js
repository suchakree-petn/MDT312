window.onload = pageLoad;
function pageLoad() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"];
    var retypePassword = document.forms["myForm"]["retypePassword"];
    if (password.value != retypePassword.value) {
        var errorMsg = document.getElementById("errormsg");
        errorMsg.innerHTML = "Password not match";
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}