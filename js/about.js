//all input

var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUppassword = document.getElementById('signUppassword')


var signUpArray = []

if (localStorage.getItem('user') != null) {
    signUpArray = JSON.parse(localStorage.getItem('user'))
}


//check is input exit
function isExist() {

    var check = false

    for (var i = 0; i < signUpArray.length; i++) {

        if (signUpArray[i].userEmail.toLowerCase() === signUpEmail.value.toLowerCase()) {
            check = true
            break;
        }

        else {
            check = false
        }
    }

    return check

}

//checkinput

function isEmpty() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUppassword.value == "") {
        return true
    }
    else {
        return false
    }

}


function signUp() {


    if (isEmpty() == true) {

        document.getElementById('exist').innerHTML = `<span class="text-danger m-3 fs-4">All input is required</span>`
    } else {
        if (isExist() == true) {
            document.getElementById('exist').innerHTML = `<span class="text-danger m-3 fs-4">email already exists</span>`
            // console.log("Match")
        } else {

            var newUser = {
                userName: signUpName.value,
                userEmail: signUpEmail.value,
                userPassword: signUppassword.value
            }
            signUpArray.push(newUser)
            localStorage.setItem('user', JSON.stringify(signUpArray))
            // console.log("Done Register");
            // console.log(signUpArray);
            document.getElementById('exist').innerHTML = `<span class="text-success m-3 fs-4">Success</span>`
            clearForm()
        }
    }


}



// clear form
function clearForm() {

    signUpName.value = ""
    signUpEmail.value = ""
    signUppassword.value = ""
}


function ValidateName() {

    var regex = /^\w{3,}$/
    var signName = signUpName.value

    if (regex.test(signName)) {

        // console.log('match');
         return true
   
    }

    else {
         //console.log('no');
         return false
    }
}


signUpName.addEventListener('keyup', function () {

    if (ValidateName()) {
        console.log('valid');
        signUpName.classList.remove('is-invalid')
        signUpName.classList.add('is-valid')
    }
    else {
        console.log('notvalid');
        signUpName.classList.remove('is-valid')
        signUpName.classList.add('is-invalid')
    }
})


function ValidateEmail() {

    var regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    var signEmail = signUpEmail.value

    if (regex.test(signEmail)) {

        // console.log('match');
        return true
    }

    else {
        // console.log('no');
        return false

    }

}

signUpEmail.addEventListener('keyup', function () {

    if (ValidateEmail()) {
        console.log('valid');
        signUpEmail.classList.remove('is-invalid')
        signUpEmail.classList.add('is-valid')
    }
    else {
        console.log('notvalid');
        signUpEmail.classList.remove('is-valid')
        signUpEmail.classList.add('is-invalid')
    }
})




