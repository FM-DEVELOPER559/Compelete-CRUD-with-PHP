function formValidation() {
    var name = document.user.name;
    var email = document.user.email;
    var password = document.user.password;
    var gender = document.user.gender;
    var country = document.user.country;
    var hobby = document.user.hobby;

    if (name.value == "" ) {
        alert("Please Enter Your name");
        return false;
    }

    if (email.value == "" ) {
        window.alert("Please Enter Your Email");
        return false;
    }
    
    if (password.value == "") {
        alert("Please Enter Your Password");
        return false;
    } 

    if (password.value.length < 5 ) {
        alert("Please Enter Minmum 5 Digit Password");
        return false;
    }
    if (gender.value.length <= 0) {
        alert("Please select gender");
        return false;
    }
    if (country.value == "Select Country") {
        alert("Please select country");
        return false;
    }
    // var check = false;
    // for (let i = hobby.length - 1; i >= 0; i--) {
    //     if(hobby[i].checked){
    //         check = true;
    //     }
    // }
    // if(check == false){
    //     alert("Please select hobby");
    //     return false;
    // }
}