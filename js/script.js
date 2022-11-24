function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "wiut00013663@gmail.com",
        Password : "WIUT13663_",
        To : 'wiut00013663@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + document.getElementById("contact_name").value 
        + "<br> Email: " + document.getElementById("contact_email").value
        + "<br> Phone no: " + document.getElementById("contact_phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Succesfully sent")
    );
}