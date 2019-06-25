function validateForm() {
    let first = document.forms["validForm"]["firstname"].value;
    let last = document.forms["validForm"]["lastname"].value;
    let adress = document.forms["validForm"]["Adress"].value;
    let pass = document.forms["validForm"]["Password"].value;
    let email = document.forms["validForm"]["E-mail"].value;
    let comment = document.forms["validForm"]["commentaire"].value;
    let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
    if ((first== "") || (last== "") || (adress == "") || (comment == "")) {
      alert("please fill out field(s)")
      return false
    }
    if(!strongRegex.test(pass)){
    alert("Please enter a valid password ! you must use uppercase,Lowercase and Number")
    return false; }

    if(!regex.test(email)){
      alert("Use a valid e-mail adress")
      return false
    }

    alert('submission successful')
    return false
  }
  