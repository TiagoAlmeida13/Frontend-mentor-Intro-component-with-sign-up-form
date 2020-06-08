function validate(){
    var name = formuser.name.value;
    var lastName = formuser.name.value;
    var email = formuser.name.value;
    var password = formuser.name.value;

    if(name == ""){
        alert('Insert a valid name!');
        formuser.name.focus();
        return false;
    }

    if(lastName == ""){
        alert('Insert a valid lastname!');
        formuser.lastName.focus();
        return false;
    }

    if(email == ""){
        alert('Insert a valid e-mail!');
        formuser.email.focus();
        return false;
    }

    if(password == "" || password.lenght <= 5) {
        alert('Insert a valid password!');
        formuser.password.focus();
        return false;
    }

    
}

