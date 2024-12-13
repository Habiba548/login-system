

//login


var signInemail = document.getElementById("signInemail")
var signInpassword = document.getElementById('signInpassword')

var local= JSON.parse(localStorage.getItem('user'))
var message = document.getElementById("isExist")



function logIn() {

    if (logInEmpty() == true) {
        message.innerHTML = `<span class="text-danger m-3 fs-4">All input is required</span>`
    }else{
        for (let i = 0; i < local.length; i++) {
        if (local[i].userEmail === signInemail.value && local[i].userPassword === signInpassword.value)  {
            message.innerHTML = `<span class="text-success m-3 fs-3 fw-bold">Welcome</span>`
            var nameOfUser = local[i].userName
            localStorage.setItem("user name",nameOfUser)
            setTimeout(function(){
                window.open("home.html","_self")
            },2000)
            break;
        }
        
        else{
            message.innerHTML = `<span class="text-danger m-3 fs-4">Incorrect Email or password</span>`
        }
    }
    
    }
}


function logInEmpty() {

    if (signInemail.value == '' || signInpassword.value == '') {
        return true
    }
    else {
        return false
    }

}





function ValidateLoginEmail() {

    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var loginEmail = signInemail.value

    if (regex.test(loginEmail)) {

        // console.log('match');
        return true
    }

    else {
        // console.log('no');
        return false

    }

}

signInemail.addEventListener('keyup', function () {

    if (ValidateLoginEmail()) {
        console.log('valid');
        signInemail.classList.remove('is-invalid')
        signInemail.classList.add('is-valid')
    }
    else {
        console.log('notvalid');
        signInemail.classList.remove('is-valid')
        signInemail.classList.add('is-invalid')
    }
})

