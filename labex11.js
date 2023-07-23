function validateForm() {
    fname = document.forms["myForm"]["fname"].value;
    lname = document.forms["myForm"]["lname"].value;
    if (fname == "" || lname == "") {
      alert("Name must be filled out");
      return false;
    }
    email = document.forms["myForm"]["email"].value;
    if (email == ""){
        alert("Email must be filled");
        return false;
    }
    password = document.forms["myForm"]["password"].value();
    rpassword = document.forms["myForm"]["rpassword"].value();
    if (password == "" || rpassword == ""){
        alert("Password fields must be filled");
        return false;
    }
    if (password != rpassword){
        alert("Both passwords should match")
        return false;
    }
  }
